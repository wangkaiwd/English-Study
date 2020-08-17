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
