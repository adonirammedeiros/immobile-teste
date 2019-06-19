document.addEventListener("DOMContentLoaded", function(event) {
    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      }


      let verdeImmobile = "#388275";
      let sublinhado = `thick solid ${verdeImmobile}`
			
			let cabecalho = document.querySelectorAll("div.FlairBuilderWidget.FlairComponentsGroup")[0]
			cabecalho.classList.add("cabecalho")
      let anuncio = getElementByXpath("//div[text()='Anuncio']")
      let tabAnuncio = getElementByXpath("//div[text()='ANUNCIO']")
      let tabObrigatorio = getElementByXpath("//div[text()='OBRIGATORIOS']")
      let localizacao = getElementByXpath("//div[text()='Localizacao']")
      let tabLocalizacao = getElementByXpath("//div[text()='LOCALIZACAO']")
			let notificaoDeSalvamento = document.querySelectorAll(".FlairBuilderWidget.Rectangle")[4]
			notificaoDeSalvamento.style.display = "none"
				
			
			let grupoSalvamento = document.querySelectorAll("div.FlairBuilderWidget.FlairComponentsGroup")[2]
			grupoSalvamento.style.top = null
			grupoSalvamento.classList.add("rodape")
			
			let botaoSalvar = document.querySelectorAll(".FlairBuilderWidget.Image")[1]
			botaoSalvar.onclick = function(){
				  notificaoDeSalvamento.style.display = "block";					
					notificaoDeSalvamento.style.position = "fixed";
					notificaoDeSalvamento.style.top = "100px"
					setTimeout(function(){
							notificaoDeSalvamento.style.display='none';
						}, 3500);
				};
				
      let metadeDaJanela = window.innerHeight / 2;
      tabObrigatorio.classList.add("sublinhado")
      
      window.onscroll = function(){
            tabObrigatorio.classList.remove("sublinhado")
            tabAnuncio.classList.remove("sublinhado")
						tabAnuncio.style.minWidth = "75px";
            tabLocalizacao.classList.remove("sublinhado")

           if(localizacao.getBoundingClientRect().top < metadeDaJanela){
             tabLocalizacao.classList.add("sublinhado")
           }else if(anuncio.getBoundingClientRect().top < metadeDaJanela){              
              tabAnuncio.classList.add("sublinhado")
           } else{            
                tabObrigatorio.classList.add("sublinhado")
           }
      }

    var comboTransacao = document.querySelectorAll(".FlairBuilderWidget.ComboBox>select")[3]
    comboTransacao.onchange = function(){
        botaoSalvar.style.zIndex = 1000				
    }  
});
