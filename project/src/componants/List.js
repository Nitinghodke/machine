import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function List(props) {
  const [state, setState] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  
 

   let dataJson={
    "lists":[
        {"id":9,"name":"Movies","description":null,"user_id":1,"system":false,"public":true,"auto_update":null,"created_at":"2021-11-21T22:31:08.000000Z","updated_at":"2021-12-19T14:51:49.000000Z","style":null,"image":"storage\/media-images\/posters\/6cn2qkGdZbUentNU8CwYmFHIlAmMBz6UUc3ynYC6.jpg","items":[{"id":23,"name":"The Boss Baby: Family Business","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/uWStkK8bq9ixY3fc7y209ZleCoF.jpg","description":"The Templeton brothers \u2014 Tim and his Boss Baby little bro Ted \u2014 have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again \u2026 and inspire a new family business.","is_series":false,"is_free":true,"year":2021,"backdrop":"https:\/\/image.tmdb.org\/t\/p\/w1280\/akwg1s7hV5ljeSYFfkw7hTHjVqk.jpg","runtime":107,"release_date":"2021-06-29T18:30:00.000000Z","popularity":705,"pivot":{"id":25,"order":0,"created_at":"2021-11-24T11:05:38.000000Z"},"rating":"7.7","model_type":"title","vote_count":0,"genres":[{"id":222,"type":"genre","name":"social-project-zone","display_name":"social-project-zone"},{"id":223,"type":"genre","name":"back-to-basics-zone","display_name":"back-to-basics-zone"}],"videos":[{"id":36,"name":"Official Trailer 2 (Universal Pictures)","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/-rF2j6K5FoM","type":"embed","quality":null,"title_id":23,"season_num":null,"episode_num":null,"source":"tmdb","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-11-24T11:05:22.000000Z","updated_at":"2021-11-24T11:05:22.000000Z","user_id":null,"language":"en","category":"trailer","episode_id":null,"score":null,"model_type":"video"}]},{"id":24,"name":"Harry Potter and the Philosopher's Stone","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg","description":"Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard\u2014with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths\u2014and about the villain who's to blame.","is_series":false,"is_free":true,"year":2001,"backdrop":"https:\/\/image.tmdb.org\/t\/p\/w1280\/lvOLivVeX3DVVcwfVkxKf0R22D8.jpg","runtime":152,"release_date":"2001-11-14T18:30:00.000000Z","popularity":268,"pivot":{"id":26,"order":1,"created_at":"2021-11-24T11:07:23.000000Z"},"rating":"7.9","model_type":"title","vote_count":0,"genres":[{"id":215,"type":"genre","name":"masterclass-Zone","display_name":"masterclass-Zone"}],"videos":[{"id":38,"name":"Harry Potter and the Sorcerer's Stone | Full Movie Preview | Warner Bros. Entertainment","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/NBClQpIsEXk","type":"embed","quality":null,"title_id":24,"season_num":null,"episode_num":null,"source":"tmdb","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-11-24T11:07:10.000000Z","updated_at":"2021-11-24T11:07:10.000000Z","user_id":null,"language":"en","category":"clip","episode_id":null,"score":null,"model_type":"video"}]},{"id":26,"name":"Grey's Anatomy","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/zPIug5giU8oug6Xes5K1sTfQJxY.jpg","description":"Follows the personal and professional lives of a group of doctors at Seattle\u2019s Grey Sloan Memorial Hospital.","is_series":true,"is_free":true,"year":2005,"backdrop":"https:\/\/image.tmdb.org\/t\/p\/w1280\/gIApbx2ffXVhJb2D4tiEx2b06nl.jpg","runtime":43,"release_date":"2005-03-25T18:30:00.000000Z","popularity":618,"pivot":{"id":27,"order":2,"created_at":"2021-11-24T11:11:29.000000Z"},"rating":"8.2","model_type":"title","vote_count":0,"genres":[],"videos":[{"id":45,"name":"Grey's Anatomy 2005 | Trailer | Amazon Prime Video","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/qbkEtYz9acA","type":"embed","quality":null,"title_id":26,"season_num":null,"episode_num":null,"source":"tmdb","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-11-24T11:11:15.000000Z","updated_at":"2021-11-24T11:11:15.000000Z","user_id":null,"language":"en","category":"clip","episode_id":null,"score":null,"model_type":"video"}]},{"id":13,"name":"Dhamaka","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/KowKEuyWziUtnCYicv6zhzTQIv.jpg","description":"When a cynical ex-TV news anchor gets an alarming call on his radio show, he sees a chance for a career comeback \u2014 but it may cost his conscience.","is_series":false,"is_free":false,"year":2021,"backdrop":"https:\/\/image.tmdb.org\/t\/p\/w1280\/lNnnhBxQESk0WbUXNeh24Dx8XA7.jpg","runtime":104,"release_date":"2021-11-16T18:30:00.000000Z","popularity":25,"pivot":{"id":45,"order":5,"created_at":"2022-01-05T06:06:28.000000Z"},"rating":null,"model_type":"title","vote_count":0,"genres":[],"videos":[{"id":77,"name":"Video","thumbnail":null,"url":"<iframe src=\"https:\/\/player.vimeo.com\/video\/656899445?h=13fdb2b267&title=0&byline=0&portrait=0\" width=\"640\" height=\"360\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen><\/iframe>\n<p><a href=\"https:\/\/vimeo.com\/656899445\">M5<\/a> from <a href=\"https:\/\/vimeo.com\/projcon\">Project Controls<\/a> on <a href=\"https:\/\/vimeo.com\">Vimeo<\/a>.<\/p>","type":"embed","quality":null,"title_id":13,"season_num":null,"episode_num":null,"source":"local","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2022-01-05T06:16:56.000000Z","updated_at":"2022-01-14T09:58:55.000000Z","user_id":1,"language":"en","category":"trailer","episode_id":null,"score":null,"model_type":"video"}]},{"id":10,"name":"Squid Game","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg","description":"Hundreds of cash-strapped players accept a strange invitation to compete in children's games\u2014with high stakes. But, a tempting prize awaits the victor.","is_series":false,"is_free":true,"year":2021,"backdrop":"https:\/\/image.tmdb.org\/t\/p\/w1280\/qw3J9cNeLioOLoR68WX7z79aCdK.jpg","runtime":54,"release_date":"2021-09-07T18:30:00.000000Z","popularity":176,"pivot":{"id":47,"order":6,"created_at":"2022-01-06T10:05:32.000000Z"},"rating":"7.8","model_type":"title","vote_count":0,"genres":[{"id":215,"type":"genre","name":"masterclass-Zone","display_name":"masterclass-Zone"},{"id":221,"type":"genre","name":"workshop-zone","display_name":"workshop-zone"}],"videos":[{"id":17,"name":"Squid Game | Behind the Scene | Netflix","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/8vac9r4WPQI","type":"embed","quality":null,"title_id":10,"season_num":null,"episode_num":null,"source":"tmdb","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-11-19T07:30:50.000000Z","updated_at":"2021-11-19T07:30:50.000000Z","user_id":null,"language":"en","category":"behind the scenes","episode_id":null,"score":null,"model_type":"video"}]}],"model_type":"list"},{"id":10,"name":"Expo Videos","description":null,"user_id":1,"system":false,"public":true,"auto_update":null,"created_at":"2021-11-20T02:45:01.000000Z","updated_at":"2021-11-20T02:45:01.000000Z","style":"landscape","image":null,"items":[{"id":30,"name":"Spider-Man","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/gSZyYEK5AfZuOFFjnVPUCLvdOD6.jpg","description":"After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.","is_series":true,"is_free":true,"year":2002,"backdrop":"https:\/\/image.tmdb.org\/t\/p\/w1280\/sWvxBXNtCOaGdtpKNLiOqmwb10N.jpg","runtime":121,"release_date":"2002-04-29T18:30:00.000000Z","popularity":125,"pivot":{"id":53,"order":0,"created_at":"2022-01-06T10:42:30.000000Z"},"rating":"7.2","model_type":"title","vote_count":0,"genres":[{"id":221,"type":"genre","name":"workshop-zone","display_name":"workshop-zone"},{"id":222,"type":"genre","name":"social-project-zone","display_name":"social-project-zone"},{"id":223,"type":"genre","name":"back-to-basics-zone","display_name":"back-to-basics-zone"}],"videos":[{"id":54,"name":"SPIDER-MAN (2002) Original \"Twin Towers\" Teaser Trailer [HD]","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/Ozz8uxW733Q","type":"embed","quality":null,"title_id":30,"season_num":null,"episode_num":null,"source":"tmdb","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-12-17T12:58:06.000000Z","updated_at":"2021-12-17T12:58:06.000000Z","user_id":null,"language":"en","category":"teaser","episode_id":null,"score":null,"model_type":"video"}]},{"id":18,"name":"Bucket List","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/fBs8xMlFEaTvWW2FN3tJ7EboNcz.jpg","description":"'Bucket List' is a story of a woman trapped in the confines of her own choices and her journey to self discovery. Madhura Sane is a 40 y.o housewife (by choice) belonging to a quintessential middle\/upper middle class family in Pune. One fine day, through a chance encounter, Madhura comes face to face with a choice that could potentially change her whole life. And that choice involves...a Bucket List.","is_series":false,"is_free":true,"year":2018,"backdrop":"https:\/\/image.tmdb.org\/t\/p\/w1280\/oiEscVnZCKJKvITp0lJL8DNtevG.jpg","runtime":130,"release_date":"2018-05-24T18:30:00.000000Z","popularity":1,"pivot":{"id":54,"order":3,"created_at":"2022-01-06T10:42:48.000000Z"},"rating":"5.0","model_type":"title","vote_count":0,"genres":[],"videos":[{"id":29,"name":"Bucket List (Marathi with English Subtitle) | Official Trailer | Madhuri Dixit Nene | 25th May","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/Rlmxohf1i_8","type":"embed","quality":null,"title_id":18,"season_num":null,"episode_num":null,"source":"tmdb","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-11-19T08:15:18.000000Z","updated_at":"2021-11-19T08:15:18.000000Z","user_id":null,"language":"en","category":"trailer","episode_id":null,"score":null,"model_type":"video"}]},{"id":20,"name":"Samantar","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/f2pwj9RTPEuShKJcm3hZbMe3RZq.jpg","description":"What if two individuals share the same destiny- the same palm lines, then what would happen? Samantar is a story about a young man Kumar Mahajan, whose life changes after he goes on journey to find, Sudarshan Chakrapani, a man who shares the same destiny with him. The life that Kumar is living is the life that Chakrapani has already lived. Will Kumar be able to control his present or change his future after meeting Chakrapani?","is_series":true,"is_free":true,"year":2020,"backdrop":"https:\/\/m.media-amazon.com\/images\/M\/MV5BNGQ5MzYyZGUtMjA3NS00ZDA2LTliMWUtNTRlOWZjYTdiNmYyXkEyXkFqcGdeQXVyMTA1OTgwNzgw._V1_.jpg","runtime":21,"release_date":"2020-03-11T18:30:00.000000Z","popularity":7,"pivot":{"id":56,"order":5,"created_at":"2022-01-06T10:42:59.000000Z"},"rating":"8.0","model_type":"title","vote_count":0,"genres":[],"videos":[{"id":30,"name":"Samantar 2 | Official Trailer - Hindi | Swwapnil Joshi, Sai Tamhankar & Nitish Bharadwaj | MX Player","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/5-XlFP-ZXa0","type":"embed","quality":null,"title_id":20,"season_num":null,"episode_num":null,"source":"tmdb","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-11-19T08:32:46.000000Z","updated_at":"2021-11-19T08:32:46.000000Z","user_id":null,"language":"en","category":"trailer","episode_id":null,"score":null,"model_type":"video"}]},{"id":23,"name":"The Boss Baby: Family Business","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/uWStkK8bq9ixY3fc7y209ZleCoF.jpg","description":"The Templeton brothers \u2014 Tim and his Boss Baby little bro Ted \u2014 have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again \u2026 and inspire a new family business.","is_series":false,"is_free":true,"year":2021,"backdrop":"https:\/\/image.tmdb.org\/t\/p\/w1280\/akwg1s7hV5ljeSYFfkw7hTHjVqk.jpg","runtime":107,"release_date":"2021-06-29T18:30:00.000000Z","popularity":705,"pivot":{"id":60,"order":5,"created_at":"2022-01-11T18:14:22.000000Z"},"rating":"7.7","model_type":"title","vote_count":0,"genres":[{"id":222,"type":"genre","name":"social-project-zone","display_name":"social-project-zone"},{"id":223,"type":"genre","name":"back-to-basics-zone","display_name":"back-to-basics-zone"}],"videos":[{"id":36,"name":"Official Trailer 2 (Universal Pictures)","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/-rF2j6K5FoM","type":"embed","quality":null,"title_id":23,"season_num":null,"episode_num":null,"source":"tmdb","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-11-24T11:05:22.000000Z","updated_at":"2021-11-24T11:05:22.000000Z","user_id":null,"language":"en","category":"trailer","episode_id":null,"score":null,"model_type":"video"}]},{"id":10,"name":"Squid Game","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg","description":"Hundreds of cash-strapped players accept a strange invitation to compete in children's games\u2014with high stakes. But, a tempting prize awaits the victor.","is_series":false,"is_free":true,"year":2021,"backdrop":"https:\/\/image.tmdb.org\/t\/p\/w1280\/qw3J9cNeLioOLoR68WX7z79aCdK.jpg","runtime":54,"release_date":"2021-09-07T18:30:00.000000Z","popularity":176,"pivot":{"id":48,"order":6,"created_at":"2022-01-06T10:06:25.000000Z"},"rating":"7.8","model_type":"title","vote_count":0,"genres":[{"id":215,"type":"genre","name":"masterclass-Zone","display_name":"masterclass-Zone"},{"id":221,"type":"genre","name":"workshop-zone","display_name":"workshop-zone"}],"videos":[{"id":17,"name":"Squid Game | Behind the Scene | Netflix","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/8vac9r4WPQI","type":"embed","quality":null,"title_id":10,"season_num":null,"episode_num":null,"source":"tmdb","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-11-19T07:30:50.000000Z","updated_at":"2021-11-19T07:30:50.000000Z","user_id":null,"language":"en","category":"behind the scenes","episode_id":null,"score":null,"model_type":"video"}]},{"id":24,"name":"Harry Potter and the Philosopher's Stone","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg","description":"Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard\u2014with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths\u2014and about the villain who's to blame.","is_series":false,"is_free":true,"year":2001,"backdrop":"https:\/\/image.tmdb.org\/t\/p\/w1280\/lvOLivVeX3DVVcwfVkxKf0R22D8.jpg","runtime":152,"release_date":"2001-11-14T18:30:00.000000Z","popularity":268,"pivot":{"id":61,"order":6,"created_at":"2022-01-11T18:14:27.000000Z"},"rating":"7.9","model_type":"title","vote_count":0,"genres":[{"id":215,"type":"genre","name":"masterclass-Zone","display_name":"masterclass-Zone"}],"videos":[{"id":38,"name":"Harry Potter and the Sorcerer's Stone | Full Movie Preview | Warner Bros. Entertainment","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/NBClQpIsEXk","type":"embed","quality":null,"title_id":24,"season_num":null,"episode_num":null,"source":"tmdb","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-11-24T11:07:10.000000Z","updated_at":"2021-11-24T11:07:10.000000Z","user_id":null,"language":"en","category":"clip","episode_id":null,"score":null,"model_type":"video"}]},{"id":26,"name":"Grey's Anatomy","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/zPIug5giU8oug6Xes5K1sTfQJxY.jpg","description":"Follows the personal and professional lives of a group of doctors at Seattle\u2019s Grey Sloan Memorial Hospital.","is_series":true,"is_free":true,"year":2005,"backdrop":"https:\/\/image.tmdb.org\/t\/p\/w1280\/gIApbx2ffXVhJb2D4tiEx2b06nl.jpg","runtime":43,"release_date":"2005-03-25T18:30:00.000000Z","popularity":618,"pivot":{"id":63,"order":8,"created_at":"2022-01-11T18:14:38.000000Z"},"rating":"8.2","model_type":"title","vote_count":0,"genres":[],"videos":[{"id":45,"name":"Grey's Anatomy 2005 | Trailer | Amazon Prime Video","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/qbkEtYz9acA","type":"embed","quality":null,"title_id":26,"season_num":null,"episode_num":null,"source":"tmdb","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-11-24T11:11:15.000000Z","updated_at":"2021-11-24T11:11:15.000000Z","user_id":null,"language":"en","category":"clip","episode_id":null,"score":null,"model_type":"video"}]},{"id":27,"name":"The Crown","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/7IbBxgYjpOp0i6BT1GRhrQ5EHBt.jpg","description":"The gripping, decades-spanning inside story of Her Majesty Queen Elizabeth II and the Prime Ministers who shaped Britain's post-war destiny. \n\nThe Crown tells the inside story of two of the most famous addresses in the world \u2013 Buckingham Palace and 10 Downing Street \u2013 and the intrigues, love lives and machinations behind the great events that shaped the second half of the 20th century. Two houses, two courts, one Crown.","is_series":true,"is_free":true,"year":2016,"backdrop":"https:\/\/image.tmdb.org\/t\/p\/w1280\/4InrdamBEM31unNiuEHGYTPX1e2.jpg","runtime":52,"release_date":"2016-11-02T18:30:00.000000Z","popularity":66,"pivot":{"id":72,"order":10,"created_at":"2022-01-11T18:17:21.000000Z"},"rating":"8.3","model_type":"title","vote_count":0,"genres":[{"id":215,"type":"genre","name":"masterclass-Zone","display_name":"masterclass-Zone"}],"videos":[{"id":46,"name":"The Crown | Featurette: Fashion | Netflix","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/7DbSyhXLTGQ","type":"embed","quality":null,"title_id":27,"season_num":null,"episode_num":null,"source":"local","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-11-24T11:12:06.000000Z","updated_at":"2022-01-14T09:22:47.000000Z","user_id":null,"language":"en","category":"featurette","episode_id":null,"score":null,"model_type":"video"}]},{"id":36,"name":"Jungle Cruise","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg","description":"Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal \u2013 a discovery that will change the future of medicine.","is_series":true,"is_free":true,"year":2021,"backdrop":"https:\/\/image.tmdb.org\/t\/p\/w1280\/7WJjFviFBffEJvkAms4uWwbcVUk.jpg","runtime":127,"release_date":"2021-07-24T18:30:00.000000Z","popularity":652,"pivot":{"id":73,"order":11,"created_at":"2022-01-11T18:17:28.000000Z"},"rating":"7.7","model_type":"title","vote_count":0,"genres":[{"id":219,"type":"genre","name":"digital-construction-zone","display_name":"digital-construction-zone"},{"id":220,"type":"genre","name":"technology-zone","display_name":"technology-zone"}],"videos":[{"id":63,"name":"Jungle Cruise Featurette - Big Adventure (2021) | Movieclips Trailers","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/aYSy8guUUV0","type":"embed","quality":null,"title_id":36,"season_num":null,"episode_num":null,"source":"tmdb","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-12-20T12:21:57.000000Z","updated_at":"2021-12-20T12:21:57.000000Z","user_id":null,"language":"en","category":"featurette","episode_id":null,"score":null,"model_type":"video"}]},{"id":40,"name":"S6 & S7 Managing the pandemic & establishing bettermp4","poster":"https:\/\/image.tmdb.org\/t\/p\/w300\/f2pwj9RTPEuShKJcm3hZbMe3RZq.jpg","description":null,"is_series":false,"is_free":true,"year":2022,"backdrop":"https:\/\/i.vimeocdn.com\/video\/1326323232-704802c035f135fb053a3d1c836513791610197341dd3928cf3b30c2a21dba9e-d?mw=960&mh=540","runtime":null,"release_date":"2022-01-09T18:30:00.000000Z","popularity":1,"pivot":{"id":74,"order":12,"created_at":"2022-01-11T18:17:37.000000Z"},"rating":null,"model_type":"title","vote_count":0,"genres":[{"id":216,"type":"genre","name":"case-studies-zone","display_name":"case-studies-zone"}],"videos":[{"id":85,"name":"video","thumbnail":null,"url":"<iframe src=\"https:\/\/player.vimeo.com\/video\/656979621?h=f88e2bfacc&title=0&byline=0&portrait=0\" width=\"640\" height=\"360\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen><\/iframe>\n<p><a href=\"https:\/\/vimeo.com\/656979621\">S6 &amp; S7 Managing the pandemic &amp; establishing bettermp4<\/a> from <a href=\"https:\/\/vimeo.com\/projcon\">Project Controls<\/a> on <a href=\"https:\/\/vimeo.com\">Vimeo<\/a>.<\/p>","type":"embed","quality":null,"title_id":40,"season_num":null,"episode_num":null,"source":"local","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2022-01-11T07:11:32.000000Z","updated_at":"2022-01-11T07:11:32.000000Z","user_id":1,"language":"en","category":"trailer","episode_id":null,"score":null,"model_type":"video"}]},{"id":9,"name":"Dexter: New Blood","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/9EBKgrFIsCFSV1RZKWhYUdbtGiv.jpg","description":"10 years after Dexter went missing in the eye of Hurricane Laura, we find him living under an assumed name in the small town of Iron Lake, New York.  Dexter may be embracing his new life, but in the wake of unexpected events in this close-knit community, his Dark Passenger beckons.","is_series":true,"is_free":true,"year":2022,"backdrop":"https:\/\/image.tmdb.org\/t\/p\/w1280\/e6v08948EZVvLrx0sWpmglguY9e.jpg","runtime":55,"release_date":"2022-02-05T18:30:00.000000Z","popularity":1000,"pivot":{"id":68,"order":13,"created_at":"2022-01-11T18:15:21.000000Z"},"rating":"8.8","model_type":"title","vote_count":0,"genres":[{"id":215,"type":"genre","name":"masterclass-Zone","display_name":"masterclass-Zone"}],"videos":[{"id":15,"name":"Official Trailer","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/l9H1uSS_zkk","type":"embed","quality":null,"title_id":9,"season_num":null,"episode_num":null,"source":"tmdb","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-11-19T07:29:33.000000Z","updated_at":"2021-11-19T07:29:33.000000Z","user_id":null,"language":"en","category":"trailer","episode_id":null,"score":null,"model_type":"video"}]}],"model_type":"list"},{"id":17,"name":"Premium Videos","description":null,"user_id":1,"system":false,"public":true,"auto_update":null,"created_at":"2022-01-03T21:44:27.000000Z","updated_at":"2022-01-10T22:16:50.000000Z","style":null,"image":"https:\/\/image.tmdb.org\/t\/p\/original\/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg","items":[{"id":9,"name":"Dexter: New Blood","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/9EBKgrFIsCFSV1RZKWhYUdbtGiv.jpg","description":"10 years after Dexter went missing in the eye of Hurricane Laura, we find him living under an assumed name in the small town of Iron Lake, New York.  Dexter may be embracing his new life, but in the wake of unexpected events in this close-knit community, his Dark Passenger beckons.","is_series":true,"is_free":true,"year":2022,"backdrop":"https:\/\/image.tmdb.org\/t\/p\/w1280\/e6v08948EZVvLrx0sWpmglguY9e.jpg","runtime":55,"release_date":"2022-02-05T18:30:00.000000Z","popularity":1000,"pivot":{"id":50,"order":1,"created_at":"2022-01-06T10:14:51.000000Z"},"rating":"8.8","model_type":"title","vote_count":0,"genres":[{"id":215,"type":"genre","name":"masterclass-Zone","display_name":"masterclass-Zone"}],"videos":[{"id":15,"name":"Official Trailer","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/l9H1uSS_zkk","type":"embed","quality":null,"title_id":9,"season_num":null,"episode_num":null,"source":"tmdb","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-11-19T07:29:33.000000Z","updated_at":"2021-11-19T07:29:33.000000Z","user_id":null,"language":"en","category":"trailer","episode_id":null,"score":null,"model_type":"video"}]},{"id":7,"name":"Venom","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg","description":"Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.","is_series":false,"is_free":false,"year":2018,"backdrop":"https:\/\/image.tmdb.org\/t\/p\/w1280\/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg","runtime":112,"release_date":"2018-09-27T18:30:00.000000Z","popularity":1058,"pivot":{"id":75,"order":4,"created_at":"2022-01-12T07:12:37.000000Z"},"rating":"6.8","model_type":"title","vote_count":0,"genres":[],"videos":[{"id":5,"name":"VENOM - Extended Preview","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/Worz_qCsYvU","type":"embed","quality":null,"title_id":7,"season_num":null,"episode_num":null,"source":"tmdb","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-11-19T07:19:57.000000Z","updated_at":"2021-11-19T07:19:57.000000Z","user_id":null,"language":"en","category":"clip","episode_id":null,"score":null,"model_type":"video"}]},{"id":20,"name":"Samantar","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/f2pwj9RTPEuShKJcm3hZbMe3RZq.jpg","description":"What if two individuals share the same destiny- the same palm lines, then what would happen? Samantar is a story about a young man Kumar Mahajan, whose life changes after he goes on journey to find, Sudarshan Chakrapani, a man who shares the same destiny with him. The life that Kumar is living is the life that Chakrapani has already lived. Will Kumar be able to control his present or change his future after meeting Chakrapani?","is_series":true,"is_free":true,"year":2020,"backdrop":"https:\/\/m.media-amazon.com\/images\/M\/MV5BNGQ5MzYyZGUtMjA3NS00ZDA2LTliMWUtNTRlOWZjYTdiNmYyXkEyXkFqcGdeQXVyMTA1OTgwNzgw._V1_.jpg","runtime":21,"release_date":"2020-03-11T18:30:00.000000Z","popularity":7,"pivot":{"id":76,"order":5,"created_at":"2022-01-12T07:16:50.000000Z"},"rating":"8.0","model_type":"title","vote_count":0,"genres":[],"videos":[{"id":30,"name":"Samantar 2 | Official Trailer - Hindi | Swwapnil Joshi, Sai Tamhankar & Nitish Bharadwaj | MX Player","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/5-XlFP-ZXa0","type":"embed","quality":null,"title_id":20,"season_num":null,"episode_num":null,"source":"tmdb","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-11-19T08:32:46.000000Z","updated_at":"2021-11-19T08:32:46.000000Z","user_id":null,"language":"en","category":"trailer","episode_id":null,"score":null,"model_type":"video"}]},{"id":18,"name":"Bucket List","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/fBs8xMlFEaTvWW2FN3tJ7EboNcz.jpg","description":"'Bucket List' is a story of a woman trapped in the confines of her own choices and her journey to self discovery. Madhura Sane is a 40 y.o housewife (by choice) belonging to a quintessential middle\/upper middle class family in Pune. One fine day, through a chance encounter, Madhura comes face to face with a choice that could potentially change her whole life. And that choice involves...a Bucket List.","is_series":false,"is_free":true,"year":2018,"backdrop":"https:\/\/image.tmdb.org\/t\/p\/w1280\/oiEscVnZCKJKvITp0lJL8DNtevG.jpg","runtime":130,"release_date":"2018-05-24T18:30:00.000000Z","popularity":1,"pivot":{"id":85,"order":6,"created_at":"2022-01-21T11:48:31.000000Z"},"rating":"5.0","model_type":"title","vote_count":0,"genres":[],"videos":[{"id":29,"name":"Bucket List (Marathi with English Subtitle) | Official Trailer | Madhuri Dixit Nene | 25th May","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/Rlmxohf1i_8","type":"embed","quality":null,"title_id":18,"season_num":null,"episode_num":null,"source":"tmdb","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-11-19T08:15:18.000000Z","updated_at":"2021-11-19T08:15:18.000000Z","user_id":null,"language":"en","category":"trailer","episode_id":null,"score":null,"model_type":"video"}]},{"id":24,"name":"Harry Potter and the Philosopher's Stone","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg","description":"Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard\u2014with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths\u2014and about the villain who's to blame.","is_series":false,"is_free":true,"year":2001,"backdrop":"https:\/\/image.tmdb.org\/t\/p\/w1280\/lvOLivVeX3DVVcwfVkxKf0R22D8.jpg","runtime":152,"release_date":"2001-11-14T18:30:00.000000Z","popularity":268,"pivot":{"id":130,"order":6,"created_at":"2022-02-11T10:39:42.000000Z"},"rating":"7.9","model_type":"title","vote_count":0,"genres":[{"id":215,"type":"genre","name":"masterclass-Zone","display_name":"masterclass-Zone"}],"videos":[{"id":38,"name":"Harry Potter and the Sorcerer's Stone | Full Movie Preview | Warner Bros. Entertainment","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/NBClQpIsEXk","type":"embed","quality":null,"title_id":24,"season_num":null,"episode_num":null,"source":"tmdb","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-11-24T11:07:10.000000Z","updated_at":"2021-11-24T11:07:10.000000Z","user_id":null,"language":"en","category":"clip","episode_id":null,"score":null,"model_type":"video"}]},{"id":23,"name":"The Boss Baby: Family Business","poster":"https:\/\/image.tmdb.org\/t\/p\/original\/uWStkK8bq9ixY3fc7y209ZleCoF.jpg","description":"The Templeton brothers \u2014 Tim and his Boss Baby little bro Ted \u2014 have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again \u2026 and inspire a new family business.","is_series":false,"is_free":true,"year":2021,"backdrop":"https:\/\/image.tmdb.org\/t\/p\/w1280\/akwg1s7hV5ljeSYFfkw7hTHjVqk.jpg","runtime":107,"release_date":"2021-06-29T18:30:00.000000Z","popularity":705,"pivot":{"id":86,"order":7,"created_at":"2022-01-21T11:49:45.000000Z"},"rating":"7.7","model_type":"title","vote_count":0,"genres":[{"id":222,"type":"genre","name":"social-project-zone","display_name":"social-project-zone"},{"id":223,"type":"genre","name":"back-to-basics-zone","display_name":"back-to-basics-zone"}],"videos":[{"id":36,"name":"Official Trailer 2 (Universal Pictures)","thumbnail":null,"url":"https:\/\/youtube.com\/embed\/-rF2j6K5FoM","type":"embed","quality":null,"title_id":23,"season_num":null,"episode_num":null,"source":"tmdb","negative_votes":0,"positive_votes":0,"reports":0,"approved":true,"order":0,"created_at":"2021-11-24T11:05:22.000000Z","updated_at":"2021-11-24T11:05:22.000000Z","user_id":null,"language":"en","category":"trailer","episode_id":null,"score":null,"model_type":"video"}]}],"model_type":"list"}],"status":"success","seo":[{"property":"og:url","content":"https:\/\/ott.progfeel.co.in","nodeName":"meta"},{"property":"og:title","content":"Project Controls TV - Topics, TV Topics","nodeName":"meta"},{"property":"og:description","content":"The Movie Database (Project Controls TV) is a popular database for movies, TV shows and celebrities.","nodeName":"meta"},{"property":"keywords","content":"movies, films, movie database, actors, actresses, directors, stars, synopsis, trailers, credits, cast","nodeName":"meta"},{"property":"og:type","content":"website","nodeName":"meta"},{"property":"og:site_name","content":"Project Controls TV","nodeName":"meta"},{"name":"twitter:card","content":"summary","nodeName":"meta"},{"nodeName":"link","rel":"canonical","href":"https:\/\/ott.progfeel.co.in"},{"nodeName":"title","_text":"Project Controls TV - Topics, TV Topics"},{"name":"description","content":"The Movie Database (Project Controls TV) is a popular database for movies, TV shows and celebrities.","nodeName":"meta"}]
    
    }

    console.log(dataJson)

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
  //     console.log(data);
  //     setData(data["data"]);
  //     
  //   });
  // }, []);

  let navitage = useNavigate();

  function logout() {
    localStorage.clear();
    navitage("/");
  }

  function back() {
    navitage("/");
     
  }

  function list() {
    setState(false);
  }

  function grid() {
    setState(true);
  }

  function section1() {
    setToggle2(false);
    setToggle3(false);
    setToggle1(true);
  }

  function section2() {
    setToggle1(false);
    setToggle3(false);
    setToggle2(true);
  }

  function section3() {
    setToggle1(false);
    setToggle2(false);
    setToggle3(true);
  }

  return (
    <div className="container">
      <div className="my-5 " >
        <button type="submit" onClick={logout} className="m-2 btn btn-success">
          Logout
        </button>
        <button type="submit" onClick={back} className="m-2 btn btn-success">
          Go Back
        </button>
        <button type="submit" onClick={list} className="m-2 btn btn-success">
          List
        </button>
        <button type="submit" onClick={grid} className="m-2 btn btn-success">
          Grid
        </button>

        <hr />
      </div>
      <div className="section-div my-5 mx-3">

      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" onClick={section1}  name="btnradio" id="btnradio1" autocomplete="off" />
  <label class="btn btn-outline-primary" htmlFor="btnradio1">Movies</label>

  <input type="radio" class="btn-check" onClick={section2} name="btnradio" id="btnradio2" autocomplete="off"/>
  <label class="btn btn-outline-primary"   htmlFor="btnradio2">Expo Videos</label>

  <input type="radio" class="btn-check"  onClick={section3} name="btnradio" id="btnradio3" autocomplete="off"/>
  <label class="btn btn-outline-primary" htmlFor="btnradio3">Premium Videos</label>
</div>
      </div>
      {toggle1 ? (
        <div>
          {state ? (
            <div>
              <div className="container ">
                <div className="row d-flex justify-content-center"
                style={{ width: "50%", marginLeft: "28%" }}>
                  {dataJson.lists[0].items.map((ele, ind) => {
                    return (
                      <div
                        key={ind}
                        className="col-md-4 p-3 m-1 border border-dark "
                      >
                      
                        <div className="card-body">
                          <h5 className="card-title"> Movies: {ele.name}</h5>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
             <div>
              <ul
                className="list-group list-group-flush "
                style={{ width: "50%", marginLeft: "30%" }}
              >
                {dataJson.lists[0].items.map((ele, ind) => {
                  return (
                    <div key={ind} className="card m-3 bo  ">
                      <ul>
                     
                        <li className="list-group-item">Movies : {ele.name}</li>
                      </ul>
                    </div>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      ) : (
        ""
      )}

     

      {toggle2 ? (
        <div>
          {state ? (
            <div>
              <div className="container ">
                <div className="row d-flex justify-content-center"
                style={{ width: "50%", marginLeft: "28%" }}>
                  {dataJson.lists[1].items.map((ele, ind) => {
                    return (
                      <div
                        key={ind}
                        className="col-md-4 p-3 m-1 border border-dark "
                      >
                       
                        <div className="card-body">
                          <p className="card-text">
                            {" "}
                            Expo Video: {ele.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (<div>
              <ul
                className="list-group list-group-flush "
                style={{ width: "50%", marginLeft: "30%" }}
              >
                {dataJson.lists[1].items.map((ele, ind) => {
                  return (
                    <div key={ind} className="card m-3 bo  ">
                      <ul>
                     

                        <li className="list-group-item">
                          {" "}
                          Expo Videos: {ele.name}
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      ) : (
        ""
      )}

     
      {toggle3 ? (
        <div>
          {state ? (
            <div>
              <div className="container ">
                <div className="row d-flex justify-content-center"
                style={{ width: "50%", marginLeft: "28%" }}>
                  {dataJson.lists[2].items.map((ele, ind) => {
                    return (
                      <div
                        key={ind}
                        className="col-md-4 p-3 m-1 border border-dark "
                      >
                       
                        <div className="card-body">
                          <p className="card-text">
                            {" "}
                            Premium Videos: {ele.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            
            <div>
            <ul
              className="list-group list-group-flush "
              style={{ width: "50%", marginLeft: "30%" }}
            >
              {dataJson.lists[2].items.map((ele, ind) => {
                return (
                  <div key={ind} className="card m-3 bo  ">
                    <ul>
                  

                      <li className="list-group-item">
                        {" "}
                        Premium Videos: {ele.name}
                      </li>
                    </ul>
                  </div>
                );
              })}
            </ul>
          </div>


          )}
        </div>
      ) : (
        ""
      )}

 
    </div>
  );
}

export default List;
