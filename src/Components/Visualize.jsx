import { Wordcloud } from "@visx/wordcloud"

const words = [
    {
      text: 'told',
      value: 64,
    },
    {
      text: 'mistake',
      value: 11,
    },
    {
      text: 'thought',
      value: 16,
    },
    {
      text: 'bad',
      value: 17,
    },
  ]

const words2 = ["these", "are", "the", "words", "words", "words", "the"]
const Visualize = () => {
  return (
    <div>
        <Wordcloud 
            height={100} 
            width={100} 
            words={words}
            fontSize={16}
            font={'Impact'}
            padding={2}
        >
            {(cloudWords) =>
                cloudWords.map((w, i) => (
                    <p>{w.text}</p>
                    // <Text
                    // key={w.text}
                    // fill={colors[i % colors.length]}
                    // textAnchor={'middle'}
                    // transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
                    // fontSize={w.size}
                    // fontFamily={w.font}
                    // >
                    // {w.text}
                    // </Text>
                ))
                }
        </Wordcloud>
    </div>
  )
}

export default Visualize