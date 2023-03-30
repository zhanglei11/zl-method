//劫持粘贴板
const _copyTextToClipboard = (value: any) => {
  let textArea = document.createElement('textarea')
  textArea.style.background = 'transparent'
  textArea.value = value
  document.body.appendChild(textArea)
  textArea.select()
  try {
    let successful = document.execCommand('copy')
  } catch (err) {
    console.log('Oops, unable to copy')
  }
  document.body.removeChild(textArea)
}
export default {
  _copyTextToClipboard,

}