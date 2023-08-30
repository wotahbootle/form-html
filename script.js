$(document).ready(function(){

    var select = '<option value=0 selected disabled>Dia</option>';
    for (i=1;i<=10;i++){
        select += '<option val=' + i + '>' + i + '</option>';
    }
    $('#dias').html(select);

    select = '<option value=0 selected disabled>Mês</option>';
    var meses = ['Janeiro','Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    for (i=1;i<meses.length + 1;i++){
        select += '<option val=' + i + '>' + meses[i - 1] + '</option>';
    }
    $('#meses').html(select);

    select = '<option value=0 selected disabled>Ano</option>';
    for (i=1990;i<=1999;i++){
        select += '<option val=' + i + '>' + i + '</option>';
    }
    $('#anos').html(select);

    $('#btnEnviar').click(function(){
        var campos = ['nome', 'sobrenome', 'mail', 'phone', 'dias', 'meses', 'anos', 'descTxt'];
        var labels = ['Nome', 'Sobrenome', 'Email', 'Telefone', 'Dia', 'Mês', 'Ano', 'Descrição'];
        var labelsNaoPreenchidas = [];
        var camposNaoPreenchidos = [];
        var index=0;

        for(i=0;i<campos.length;i++){
            try{
                var valorCampo = $('#' + campos[i]).val().trim();
            }
            catch{
                var valorCampo = $('#' + campos[i]).val();
            }
            if(valorCampo == "" || valorCampo == null){
                camposNaoPreenchidos = camposNaoPreenchidos.concat(campos[i]);
                labelsNaoPreenchidas = labelsNaoPreenchidas.concat(labels[i]);
            }
        }

        if(camposNaoPreenchidos.length > 0){
            var alerta="";
            for(i=0;i<camposNaoPreenchidos.length;i++){
                
                alerta += "O campo [" + labelsNaoPreenchidas[i] + "] é necessário.\n"
            }

            alert(alerta);
        }
        else{
            var informacoes ="Nome: " + $('#nome').val() + "\n" +
            "Sobrenome: " + $('#sobrenome').val() + "\n" +
            "E-Mail: " + $('#mail').val() + "\n" +
            "Telefone: " + $('#phone').val() + "\n" +
            "Data de Nascimento: " + $('#dias').val() + "/" + ("0" + $("#meses option:selected").attr("val")).slice(-2) + "/" + $('#anos').val() + "\n" + 
            "Descrição: " + $('#descTxt').val();
            
            alert(informacoes);
        }       
    });
    $('#btnLimpar').click(function(){
        limpar();
    });

    function limpar(){
        $("#nome").val("");
        $("#sobrenome").val("");
        $("#mail").val("");
        $("#phone").val("");

        $("#dias").val("0");
        $("#meses").val("0");
        $("#anos").val("0");
        $("#descTxt").val("");
    }
});