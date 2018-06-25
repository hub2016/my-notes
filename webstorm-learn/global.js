//console.time("test");

//console.log("This is a log");
//console.info("This is an info");
//console.warn("This is a warn");
//console.error("This is an error");

//process.stdout.write("This is stdout");
//process.stderr.write("This is stderr");

//process.stdin.setEncoding("utf-8");

//监听事件
//process.stdin.on("data",function(data){
//    console.log(data);
//});
//
//process.stdin.on("readable",function(){
//    var data = process.stdin.read();
//    console.log(data);
//});
//
//process.stdin.on("exit",function(){
//    console.log("program will exit");
//});
//process.stdin.on("SIGINT",function(){
//    console.log("program will sigint");
//    process.exit();
//});
//console.log(process.cwd());

//console.timeEnd("test");

console.log(process.argv);