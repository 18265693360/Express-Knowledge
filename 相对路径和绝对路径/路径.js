//绝对路径：从盘符开始
// C:\windows\system32\cmd.exe

// 相对路径：是从当前路径开始的路径 假如当前路径为C:\windows
// 要描述上述路径 只需要输入 system32\cmd.exe

//严格的路径写法
// .\system32\cmd.exe
//其中 .表示当前路径 在一般情况下可以省略 只有在特殊的情况下不能省略

//假如当前路径为c:\progrom files
//要调用上述命令 则需要输入
// ..\windows\system32\cmd.exe
// 其中 ..为父目录

// 当前路径为 c:\program files\common files

//则需要输入
// ..\..\windows\system32\\cmd.exe


// 绝对路径：是从盘符开始的路径，形如
// C:\windows\system32\cmd.exe
// 相对路径：是从当前路径开始的路径，假如当前路径为C:\windows
// 要描述上述路径，只需输入
// system32\cmd.exe
// 实际上，严格的相对路径写法应为
//     .\system32\cmd.exe
// 其中，.表示当前路径，在通道情况下可以省略，只有在特殊的情况下不能省略。
// 假如当前路径为c:\program files