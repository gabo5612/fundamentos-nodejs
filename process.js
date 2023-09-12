process.on('exit' ,() => {
    console.log('acabo');
})

process.on('beforeExit' ,() => {
    console.log('Esta por acabar');
})

process.on('uncaughtException' ,(err, origen)=>{
    console.error('se nos paso un error')
    console.error(err)
})

functionTal()

console.log('no deberia salir')