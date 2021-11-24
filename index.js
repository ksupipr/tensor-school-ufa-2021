const modal = $.modal()

const btnJoin = document.getElementsByClassName('button__join')
//btnJoin.forEach(function(){modal.open()})
for(var i = 0; i < btnJoin.length; i++)
{
    btnJoin[i].onclick = function(){modal.open()}
}
//console.log(btnJoin)
