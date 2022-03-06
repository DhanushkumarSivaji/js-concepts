function x(){
    for(var i =0; i <=5; i++) {
        function test(x){
            setTimeout(() => {
                console.log(x)
            },x*1000)
        }
        test(i)
    }
}
x()