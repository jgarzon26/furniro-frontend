import { CardItem } from "../common";

const ShopGridSection = () => {
  return (
    <section className="p-20">
      <ul className="grid grid-cols-5 gap-y-7">
        {
          Array.from({length: 16}).map((_, index) => (
            <CardItem key={index}/>
          ))
        }
      </ul>
    </section>
  )
}

export default ShopGridSection;