---
title: "MASOM: Musical Agent based on Self-Organizing Maps"
description: A musical software agent for live performance that learns by listening to audio files and generates music in real-time.
date: 2016-09
status: archive
tags:
  - Musical AI
  - Research

---

<iframe src="https://www.youtube.com/embed/cShPEZDrBsw?hl=en_US&amp;version=3&amp;vq=hd720" title="MASOM examples" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="origin" allowfullscreen style="display:block; margin:1.5rem auto; width:min(100%, 1080px); aspect-ratio:16/9; height:auto;"> </iframe>

*Can we create an AI that listens to more music than a human could?*

Musical agents are AI software making music. Musical Agent based on Self-Organizing Maps (MASOM) [1,2,3] is a musical software agent for live performance. MASOM plays experimental music and free improvisation. It learns by listening to audio files such as recordings of performances or compositions. We can train a MASOM agent on a set of music that is so big that it would take more than one human life to listen. Similarly, we can train MASOM agents on dead composers and convert their fixed media piece to interactive musical agents.

MASOM also extracts higher level features such as eventfulness (arousal), pleasantness (valence), and timbre to understand the musical form of what it hears. MASOM is limited to the style of what is has listened to and reacts in real-time to what he is hearing. The agent can listen to itself and other performers to decide what to play next. 

<i class="fa-brands fa-github"></i> <b>Code:</b> <a>https://github.com/ktatar/MASOM</a></b>

## Conceptualization and Architectural Design of MASOM

The architectural design of MASOM is an extension of my electroacoustic music composition studies that I received during my masters at Institute for Advanced Studies in Music (MIAM) at Istanbul Technical University. The Sonic Arts syllabus at MIAM focused on electroacoustic composition, sound studies, and history of electronic music. During my masters studies, I became invested in 20th century electronic music theories and sound materiality. To this day, I continue my research interest in sound materiality and I still publish on this thread beyond MASOM, such as [4, 5].

I developed and tested the first implementation of MASOM as a Max patch (rather a spagetti mess) during a three-day public holiday in 2016. The reason that I allocated that public holiday for this project was that I was given work tasks in other research directions, which were more inline with tools for certain commercial products. Hence, I used the holiday to pursue a much more personally interesting idea arising from my passion of organising sounds in timbre and temporality.

This first implementation comprised all the conceptual and architectural design and components of MASOM: the online and offline machine listening, the self-organizing maps, the variable Markov models, and the affective computing; both in model training and realtime interaction. Additionally, the first implementation grew directly from my artistic research. The first MASOM agent was trained on my own (rather noisy) improvised music album titled Self Disruption, and I publicly performed with this first MASOM iteration in realtime within the title [A Conversation with Artificial Intelligence](/projects/a-conversation-with-artificial-intelligence).

The later iterations of MASOM have been built on the concept, design, and AI architecture of the first implementation. Those later iterations investigated tests for larger datasets, better UI for training and realtime interaction; cleaning up of the spagetti Max messes using abstraction tools such as Jamoma, testing different sets of audio features, and testing other statistical sequence models (ie Factor Oracle).

Later, MASOM became the main foundation of my doctoral thesis. Many people contributed to the research and implementation of MASOM. For example, the multivariate model of affective computing was created with help from Jianyu Fan. I utilized libraries and research works of many others in the first implementation (as cited in the first academic publication of MASOM), including the Max Sound toolbox by IRCAM for audio feature extraction, the self-organizing map Max implementation in [ml.* by Benjamin Day Smith](https://www.benjamindaysmith.com/ml-machine-learning-toolkit-in-max/), and Variable Markov models Java implementation by [Aengus Martin](https://www.am-process.org/s). Many of my teachers and other academic colleagues have been very supportive in directing me to some of these resources. I am greateful for the support that I received from everyone and the funding organizations, which helped me to conceptualize, design, and implement MASOM initially. Since then, MASOM has been an influential work for a decade, picked up by many other researchers and artists, who have progressed the MASOM architecture to a variety of musical and technical directions.

## Publications

[1] **Tatar K.**, Pasquier P., Siu R. (2019) Audio-based Musical Artificial Intelligence and Audio-Reactive Visual Agents in Revive. Accepted to the International Computer Music Conference and New York City Electroacoustic Music Festival 2019 (<a href="https://nycemf.org" target="_blank">ICMC-NYCEMF 2019</a>).

[2] **Tatar K.**, Pasquier P., &amp; Siu R. (2018). REVIVE: An audio-visual performance with musical and visual Artificial Intelligence Agents. <a href="https://chi2018.acm.org" target="_blank">CHI’18</a>, April 21–26, 2018, Montreal, QC, Canada ACM 978-1-4503-5621-3/18/04.

[3] **Tatar, K.** &amp; Pasquier, P. (2017). MASOM: A Musical Agent Architecture based on Self-Organizing Maps, Affective Computing, and Variable Markov Models. In <a href="http://musicalmetacreation.org/proceedings/mume-2017/" target="_blank" rel="noopener">Proceedings of the 5th International Workshop on Musical Metacreation (MuMe 2017)</a>. <a href="http://musicalmetacreation.org/buddydrive/file/tatar/" target="_blank">Paper</a>

[4] Zappi, V. and **Tatar, K.** 2025. Neural audio instruments: epistemological and phenomenological perspectives on musical embodiment of deep learning. Frontiers in Computer Science. DOI:10.3389/fcomp.2025.1575168.

[5] Madaghiele, V., Lund, L., Holzer, D., Kelkar, T., **Tatar, K.**, and Holzapfel, A. 2026. Expanding the machine: Notating generative synthesis with a state-based representation and a navigable timbre space. Organised Sound. DOI:10.1017/S1355771825100915.

The following is the documentation of MASOM‘s previous versions, and public presentations. (ノ ˘_˘)ノ----<a href="MASOM-archive" class="icon-link" rel="history">︎</a>

## Acknowledgements

This work has been supported by the Canada Council of the Arts, the Natural Sciences and Engineering Research Council of Canada, and Social Sciences and Humanities Research Council of
Canada.

Ce travail est supporté par le conseil des arts du Canada, le Conseil national des sciences et de l’ingénieurie du Canada, et le Conseil national des sciences humaines et sociales du Canada.

---

# MASOM Archive

The following is the documentation of MASOM‘s previous versions, and public presentations. 

(ノ ˘_˘)ノ----︎

## MASOM @Ars Electronica 2017

MASOM joins two media art companies from Istanbul, AudioFil and Ouchhh,  for a performance titled [IOTA at the Ars Electronica Festival 2017](https://monoskop.org/images/1/14/Ars_Electronica_AI_Artificial_Intelligence_The_Other_I_2017.pdf) Artificial Intelligence in Linz, Austria.

<div style="max-width:267px; margin:1.5rem auto;">
  <iframe
    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FOuchhh.tv%2Fvideos%2F1492873787455600%2F&show_text=0&width=267"
    title="MASOM @Ars Electronica 2017"
    style="display:block; width:100%; height:476px; border:none; overflow:hidden;"
    scrolling="no"
    frameborder="0"
    allowfullscreen="true"
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  ></iframe>
</div>

## MASOM @IMapp 2017

MASOM joins two media art companies from Istanbul, AudioFil and Ouchhh, for a projection mapping piece on the Facade of Romanian Parliament at the IMapp 2017 Bucharest, Romania.

<iframe src="https://www.youtube.com/embed/KH2VIRy8RJc?start=1156" title="MASOM @IMapp 2017" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="origin" allowfullscreen style="display:block; margin:1.5rem auto; width:min(100%, 1080px); aspect-ratio:16/9; height:auto;"> </iframe>

## Patar @Barely Constrained by CoCreaTive


Patar is an experimental electronic music project featuring Kıvanç Tatar, Philippe Pasquier, and MASOM. Together, three entities produce a live performance of experimental electronic music, live electroacoustic music, musique concrète, soundscape compositions, through structured improvisation.

Patar’s performances experiments with a wide range of electronic music styles within the performance. The performances of Patar oscillate between ambient and noise while exploring the frontiers of the rhythmic and tonal, and using both electronic and acoustic textures.

<iframe src="https://www.youtube-nocookie.com/embed/4AeFFrxFXsg?hl=en_US&amp;version=3&amp;vq=hd1080" title="Patar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="origin" allowfullscreen style="display:block; margin:1.5rem auto; width:min(100%, 1080px); aspect-ratio:16/9; height:auto;"> </iframe>

This performance includes three piece. Each piece includes a different MASOM agent.

The details of the event available [here](https://cocreative.wordpress.com/2017/04/11/barely-constrained-the-gold-saucer/).

<iframe src="https://player.vimeo.com/video/214256505?color=ffffff" title="MASOM examples" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="origin" allowfullscreen style="display:block; margin:1.5rem auto; width:min(100%, 1080px); aspect-ratio:16/9; height:auto;"> </iframe>

## A Big MASOM Family

<small>Kıvanç Tatar, 2017</small>

The piece has three parts, including two MASOM agents. In the first part, I am performing with a MASOM agent. In the second part, two MASOM agents perform together without me. The last part is a trio of me and two MASOM agents. The MASOM agents are trained on this album [💿️](http://bandcamp.com/track/self-distruption).

<iframe src="https://www.youtube-nocookie.com/embed/FJuMR1gtgp0?hl=en_US&amp;version=3&amp;vq=hd1080" title="A Big MASOM Family" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="origin" allowfullscreen style="display:block; margin:1.5rem auto; width:min(100%, 1080px); aspect-ratio:16/9; height:auto;"> </iframe>


Here is an excerpt from the rehearsals with two MASOM agents. One MASOM agent is on the left channel, the other MASOM agent is on the right, and I am on both channels.

<iframe src="https://player.vimeo.com/video/209694703?color=ffffff" title="A Big MASOM Family Rehearsal Excerpt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="origin" allowfullscreen style="display:block; margin:1.5rem auto; width:min(100%, 1080px); aspect-ratio:16/9; height:auto;"> </iframe>
