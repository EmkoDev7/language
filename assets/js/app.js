const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');
		const titleEl = document.querySelector('.title');
		const descrEl = document.querySelector('.description');

		link.forEach(el => {
			el.addEventListener('click', () => {
				langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');

				const attr = el.getAttribute('language');

				titleEl.textContent = data[attr].title;
				descrEl.textContent = data[attr].description;
			});
		});

var data = {
    
    "english": 
    {
      "title": "Hello World",
      "description": 
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non adipisci eligendi repellat ad dolor veritatis itaque sequi minus iste, doloremque. Officiis non eaque atque excepturi repudiandae nulla eos eligendi magni molestiae eius distinctio, voluptas pariatur incidunt et culpa inventore aspernatur recusandae nihil asperiores, vitae, maiores laborum quasi perspiciatis natus dignissimos! Accusantium aliquam nostrum impedit dignissimos iste, iure inventore! Sapiente, labore earum ut dicta ducimus asperiores laudantium natus officiis, quisquam placeat aspernatur voluptatum aut voluptates tenetur quos magni fugit quia. Fugiat."
    },
    "kazakh": 
    {
      "title": "Сәлем Әлем",
      "description": 
          "Сәбіз Lorem ipsum, жеңілдік. Бұл ауырсыну үшін осы ұннан таңдамаңыз, сондықтан аз Осы ауырсынуды орындаңыз. Қызметтер жоқ және оның айырмашылығын ұлы ыңғайсыздық таңдау, тәжірибе ретінде қабылданған ештеңе өңдеу үшін нәтиже инцидент және қателіктерді зерттеуші ләззат, өмір, encounter born сияқты үлкен тағамдар-бәрі! Осы мәселе бойынша біздің сабоның кейбірін ашу, зерттеуші дұрыс! Дана, біз asperiores туған қызметтер тізімі деді олардың жұмыс, кез келген уақытта, содан бері үлкен жүгірістер, соның ішінде ләззат немесе рахат өңдеу сұраймыз. Қашуға."
    },
    "japanese": 
    {
      "title": "ハロー・ワールド",
      "description": 
          "ﾂつｨﾂ知ﾂづｧﾂつｹﾂ-ﾂ新ﾂ陳ﾂ湘ｮﾂ陛ｱ これらの苦痛から真実の苦痛に選ぶために得てはいけない、従ってより少しにこの苦痛に従ってはいけない。 サービスではないと、彼の区別の大きな不快感から選択するそれらの否認を歓迎しない、結果として生じた事件の喜びと障害エクスプローラが受け入 このことについて私たちの下駄のいくつかを非難,右エクスプローラ! 的に仕事をしていまasperioresリストの生まれのサービスをつけてください編集喜びや楽しみの開催なども走りました。 走れ。."
    },
    "bosnian": 
    {
      "title": "Zdravo svijete",
      "description": 
          "Istina je da je sam bol važan, dobitak prati dobitak. Izbor da se ne dobije odbijen je boli istine, pa je slijedite manje, a bol. Nema razlike između velikih muka da ih izabereš i odbaciš.život,veći trudovi kao da si vidio najvrednijeg rođenog!Ovaj koči neke naše tužitelje,najvrednije,izumitelje zakona!Mudro svojim trudom dok vodimo spomenute žešće rođene hvale dužnosti, ko god hoće može biti odbačen zadovoljstvima ili zadovoljstvima onih od kojih veliki bježe. Neka bježi."
    },
    "spanish": 
    {
      "title": "Hola Mundo",
      "description": 
          "La verdad es que el dolor en sí es importante, va seguido de un aumento en la ganancia. Si no lo obtienes, te lleva al dolor de la verdad, así que sigue menos de él y del dolor. No hay distinción de elegirlos y rechazarlos. ¡Vida, trabajos mayores como si hubieras visto nacer al más digno! ¡Este estorba a algunos de nuestros acusadores, al más digno, al inventor de la ley! Sabiamente, con su trabajo, como conducimos a los dichos nacidos más duros. alabadores de los deberes, el que quiere es despreciado por los placeres, o se tienen placeres de los cuales huyen los grandes. Que huya."
    }
  }