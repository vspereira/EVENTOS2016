$('.dynamic').on('click', function() {

        var foto = $(this).data('value');
        var nroFotos =  $(this).data('qtd');
        var pasta = $(this).data('pasta');

        var  img;
        var myArray = [];

        for (var  index = 1; index <= nroFotos; index++) {
            img = 'img/galeria/'+ pasta +'/' + index + '.jpg';
             myArray.push({ src: img, thumb: img });
        }
 
    $(this).lightGallery({
        dynamic: true,
        dynamicEl: myArray
    })
 
});