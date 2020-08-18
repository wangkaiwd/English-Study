## `CS`可视化：有用的`Git`命令
尽管`Git`是一个非常强力的工具，当我说这也可能是一场噩梦😐，我想大多数人也会同意。在使用`Git`的时候，我发现在我的大脑中想象发生了什么是非常有用的：在我执行特定命令的时候，分支之间是如何相互影响的，以及它会如何影响历史日志？当我在`master`分支做了硬重置(`hard reset`),强制推送(`force push`)到`master`分支并且`rimraf` `.git`目录。

我认为为最常用和最有用的命令创建一些可视化的图例将会成为完美的使用示例！🥳我涉及到的许多命令拥有可选的参数，你可以使用这些参数来更改命令的行为。在示例中，我将会涉及没有添加(太多)配置项的命令的默认行为！😄

### 合并
拥有多个分支是极其方便的，他可以使新的更新彼此分离，也可以确保你不会意外的推送未经批准或破坏性更改的代码到生产环境。一旦更改被批准，我们想要在生产环境获得这些更改。从一个分支获得另一个分支更改的一种方式是执行`git merge`命令。`Git`可以执行俩种类型的合并： `fast-forward`, `non-fast-forward`。

现在这可能没有太大意义，我们先看一下它们之间的区别。

#### Fast-forward(`--ff`)
与我们正在合并的分支相比，当当前分支没有额外提交的时候，会发生`fast-forward-merge`。`Git`是懒惰的，它会首先尝试最简单的选项：`fast-forward`!这种类型的合并不会创建一个新的提交，而是在当前分支上合并我们正在合并的分支上的提交 🥳。

![](https://res.cloudinary.com/practicaldev/image/fetch/s--cT4TSe48--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/894znjv4oo9agqiz4dql.gif)

完美！我们现在在`master`分支上可以找到所有在`dev`分支上做出的更改。那么，`non-fast-forward`是什么意思呢？

#### No-fast-forward(`--no-ff`)
相比于你想要合并的分支，当前分支没有任何额外的提交是极好的，但不幸的是那是很罕见的情况！如果在当前分支上提交的更改在我们想要合并的分支上不存在，`Git`将会执行一次`no-fast-forward`合并。

随着一次`no-fast-forward`合并，`Git`在活动分支(本例中是`master`)上创建一个新的合并提交。提交的父提交同时指向活动分支和我们想要合并的分支(本例中是`dev`)。
![](https://res.cloudinary.com/practicaldev/image/fetch/s--zRZ0x2Vc--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/rf1o2b6eduboqwkigg3w.gif)

没什么大不了的，一次完美的合并！🎉`master`分支现在包含了所有我们在`dev`分支上做出的所有更改。

#### 合并冲突
尽管`Git`擅长如何合并分支以及向文件中添加更改，但是它不能总是依靠它自己来做出所有的决定🙂。当我们尝试合并的俩个分支在同一个文件的同一行上有不同的更改，或者如果一个分支删除了一个在另一个分支被编辑过的文件等情况发生的时候，`Git`将不能自己决定该如何合并代码。

在这种情况下，`Git`将会询问您来帮助决定我们想要保留俩个选项中的哪一个。比如说在俩个分支上，我们都编辑了`README.MD`中的第一行。
![](https://res.cloudinary.com/practicaldev/image/fetch/s--jXqGWUai--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/m3nxmp67mqof5sa3iik9.png)

如果你想把`dev`合并到`master`，这将会导致合并冲突：您希望标题是`Hello!`还是`Hey!`?

在尝试合并分支的时候，`Git`将会为您显示冲突发生的位置。我们可以手动移除我们不想保留的更改，保存剩余的更改，再次添加文件到暂存区然后提交所有的更改🥳。
![](https://res.cloudinary.com/practicaldev/image/fetch/s--7lBksXwA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/bcd5ajtoc0g5dxzmpfbq.gif)

好极了！尽管解决冲突十分烦人，但是它完全有意义：`Git`不应该只是假设我们想要保留哪些更改。

### Rebasing
我们刚刚已经看过如何通过执行一个`git merge`命令将来自于一个分支的更改应用到另一个分支。从一个分支添加更改到另一个分支的另一个方法是执行`git rebase`命令。

`git rebase`会从当前分支拷贝提交，并且将这些拷贝的提交放到指定分支的顶部。
![](https://res.cloudinary.com/practicaldev/image/fetch/s--EIY4OOcE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/dwyukhq8yj2xliq4i50e.gif)

完美，我们现在在`dev`分支上可以找到所有在`master`分支上做出的更改！🎊

`rebase`和`merge`命令一个最大的不同是：`Git`不会尝试去找出哪些文件要保留，哪些文件不需要保留。我们正在`rebase`的分支总是拥有我们想要保留的最新更改！这种方式在合并过程中不会遇到任何冲突，并且可以保持一个很好的线性`Git`历史记录。

这个例子展示了在`master`分支上进行`rebase`。然而在更大的项目中，通常不希望这样做。`git rebase`改变了项目的历史记录，因为为拷贝的提交创建了新的哈希值。

无论何时你在一个特性分支上工作，并且`master`分支已经被更新，`rebase`都是一种很好的做法。您可以在自己的分支上获取到所有的更新，这将阻止未来的合并冲突！😄

#### 交互式的rebase
在`rebase`提交之前，我们可以编辑它们！😃 我们可以使用一个交互式的`rebase`来做这件事。交互式`rebase`对于您当前正在工作的分支以及想要修改的某些提交也是很有用处的。

在我们正在`rebase`的提交上有6个操作可以执行：
* `reword`: 更改提交信息
* `edit`: 修改这次提交
* `squash`: 合并提交到前一个提交
* `fixup`: 合并提交到前一个提交，不保留提交的日志消息
* `exec`: 在我们想要`rebase`的每一个分支上运行一个命令
* `drop`: 移除一个提交

棒极了！通过这种方式，我们可以完全控制在分支上做出的提交。如果我们想要移除一个提交，我们只需要对它执行`drop`命令。
![](https://res.cloudinary.com/practicaldev/image/fetch/s--P6jr7igd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/msofpv7k6rcmpaaefscm.gif)

或者如果你想将多个提交压缩到一起来获得一个干净的历史记录，完全没有问题！
![](https://res.cloudinary.com/practicaldev/image/fetch/s--VSQt4g1V--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/bc1r460xx1i0blu0lnnm.gif)

交互式`rebase`对于你正在尝试`rebase`的提交甚至是当前活动分支都给予了极大的控制权！

### Resetting
这个命会在已经提交的更改在之后不想要的时候会被用到。可能它是一个还在工作进度中的半成品提交，或者可能提交引入了`bug`!🐛 在这种情况，我们可以执行`git reset`命令。

`git reset`会删除当前暂存的所有文件，并且让我们控制`HEAD`应该指向的位置。

#### Soft reset
`soft reset`移动`HEAD`到指定的提交(或者提交相对于`HEAD`的索引)，不会删除在提交之后引入的更改！

比如说我们不想保留添加了一个`style.css`文件的提交`9478i`，也不想保留添加了一个`index.js`文件的提交`035cc`。但是我们想要保留新添加的`style.css`和`index.js`文件！这是`soft reset`一个完美的使用示例。
![](https://res.cloudinary.com/practicaldev/image/fetch/s---GveiZe---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/je5240aqa5uw9d8j3ibb.gif)

当输入`git status`时，你将会发现我们仍然可以访问在之前的提交做出的所有更改。这很好，因为这意味着我们可以处理这些文件内容中的问题，并且在之后再次提交它们！

#### Hard reset
有些时候，我们不想保留通过特定分支引入的更改。不同于`soft reset`，我们不再需要访问这些不想被保留的更改。`Git`应该只是重置它的状态回到指定提交的位置：被重置的状态甚至包括在你在工作目录以及暂存文件中做出的更改！💣
![](https://res.cloudinary.com/practicaldev/image/fetch/s--GqjwnYkF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/hlh0kowt3hov1xhcku38.gif)

`Git`已经丢弃的在`9e78i`和`035cc`上引入的更改，并且重置它的状态到提交`ec5be`所在的位置

### Reverting
撤销更改的另一个方式是执行`git revert`命令。通过恢复一个特定的提交，我们会创建一个包含被恢复的更改的新提交！

比如说`ec5be`添加了一个`index.js`文件。之后，我们真正的意识到我们不在想要这次提交引入的更改！让我们恢复`ec5be`对应的提交。
![](https://res.cloudinary.com/practicaldev/image/fetch/s--eckmvr2M--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/3kkd2ahn41zixs12xgpf.gif)

完美！提交`9e78i`包含`ec5be`提交引入的被恢复的更改。在不修改分支历史的情况下，为了撤销一次特定的提交，执行`git revert`命令是特别有用的。