const hepburn = require('hepburn')

const inputField = document.querySelector('.inputField')
const hiraganaBtn = document.querySelector('.btn.hiragana')
const katakanaBtn = document.querySelector('.btn.katakana')
const output = document.querySelector('.output')

const convert = () => {
	const text = inputField.value
	if (text.length > 0) {
		if (hepburn.containsKana(text)) {
			if (hepburn.containsHiragana(text)) {
				setMode('hiragana')
			} else {
				setMode('katakana')
			}
			output.innerText = hepburn.fromKana(text)
		} else {
			if (hiraganaBtn.classList.contains('active')) {
				output.innerText = hepburn.toHiragana(text)
			}
			if (katakanaBtn.classList.contains('active')) {
				output.innerText = hepburn.toKatakana(text)
			}
		}	
	} else {
		output.innerText = ''
	}
}

const setMode = (mode, shouldConvert = false) => {
	if (mode === 'hiragana') {
		inputField.placeholder = 'こんにちは'
		hiraganaBtn.classList.add('active')
		katakanaBtn.classList.remove('active')
	}
	if (mode === 'katakana') {
		inputField.placeholder = 'コンピューター'
		hiraganaBtn.classList.remove('active')
		katakanaBtn.classList.add('active')
	}
	if (shouldConvert) {
		convert()
	}
}

hiraganaBtn.addEventListener('click', () => setMode('hiragana', true))
katakanaBtn.addEventListener('click', () => setMode('katakana', true))

inputField.addEventListener('input', convert)

convert()
