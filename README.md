# Video Transparente na Web

Demo em: [guilhermerodrigues680.github.io/transparent-video-on-the-web](https://guilhermerodrigues680.github.io/transparent-video-on-the-web/)

## Procedimento

1. Gerar o video com canal alpha usando o Davinci Resolve.
   - `o arquivo gerado será chamado aqui de in-raw.mov`
2. Gerar o .webm usando o ffmpeg.
   - `ffmpeg -i ./in-raw.mov -c:v libvpx-vp9 -crf 23 -b:v 0 ./video.webm`
3. Gerar o .mov intermediario compativel com avconvert do macOS.
   - `ffmpeg -i ./in-raw.mov -c:v prores_ks -pix_fmt yuva444p10le -alpha_bits 16 -profile:v 4444 -f mov outint.mov`
4. Gerar o .mov final usando o avconvert do macOS.
   - `avconvert --preset PresetHEVC1920x1080WithAlpha --source outint.mov --output video.mov`

## Referências

Davinci Resolve (editor de video) para gerar videos com canal alpha:

- [https://www.blackmagicdesign.com/br/products/davinciresolve/](https://www.blackmagicdesign.com/br/products/davinciresolve/)

Video ensinando gerar video com canal alpha no Davinci Resolve e usar o ffmpeg para exportar .webm:

- [https://www.youtube.com/watch?v=4Gv7a_fTSio](https://www.youtube.com/watch?v=4Gv7a_fTSio)

Artigo monstrando como fazer Cross-browser de videos com canal alpha:

- [https://css-tricks.com/overlaying-video-with-transparency-while-wrangling-cross-browser-support/](https://css-tricks.com/overlaying-video-with-transparency-while-wrangling-cross-browser-support/)

Outros artigos sobre o assunto:

- [https://kitcross.net/hevc-web-video-alpha-channel/](https://kitcross.net/hevc-web-video-alpha-channel/)
- [https://blog.gskinner.com/archives/2021/10/alpha-video-in-html5.html](https://blog.gskinner.com/archives/2021/10/alpha-video-in-html5.html)
