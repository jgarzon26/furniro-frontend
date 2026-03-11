import { FC } from "react";
import { Placeholder } from "@/components/common";

const DescriptionPanel: FC = () => {
  return (
    <article className="px-20 py-10 flex flex-col gap-10 text-shop-detail-highlight">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum cursus lobortis nulla lacinia ultricies. 
        Curabitur ultricies placerat dolor, ut scelerisque purus mollis vel. Curabitur dapibus dolor justo, eu mattis tellus pretium ac. 
        Ut id maximus lorem, porttitor mattis velit. Nunc accumsan molestie augue vitae consequat. Nunc fermentum massa nisi. 
        In luctus tempus mauris, vitae fringilla enim pellentesque eu. Mauris auctor leo et lacus condimentum pellentesque. 
        Fusce ultricies ligula turpis, dignissim euismod enim sodales vel. Maecenas ornare urna id lectus finibus vestibulum. 
        Fusce bibendum purus imperdiet, ullamcorper purus in, venenatis dolor. Etiam ullamcorper iaculis purus, nec venenatis elit. 
        Nulla eget porttitor nulla.
      </p>
      <p>
        Donec molestie elit arcu, at semper est porttitor nec. Phasellus turpis nulla, consectetur sit amet tincidunt sed, tristique eu dui. 
        Pellentesque hendrerit, mauris ut aliquet consectetur, tortor quam porta ligula, semper rutrum purus mauris vel sem. 
        Praesent et auctor tellus. Quisque facilisis sapien ipsum, malesuada varius quam lacinia quis. 
        Morbi pulvinar tortor non est aliquet fringilla eget sit amet augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
        Integer at dui pharetra, faucibus elit vitae, varius tortor. Phasellus ut augue accumsan, sagittis magna id, cursus elit. 
        Nulla eu orci mauris. Fusce lobortis vitae diam ut imperdiet. In hac habitasse platea dictumst. Curabitur non ipsum et nulla hendrerit tempor sed sed ex. 
        Fusce accumsan quam at lacus ultrices molestie. Mauris fermentum sit amet nunc vel pharetra. 
        Curabitur lacus risus, imperdiet eget nulla eu, imperdiet lobortis risus.
      </p>
      <div className="flex flex-row gap-10">
        <Placeholder className="flex-1 aspect-3/2"/>
        <Placeholder className="flex-1 aspect-3/2"/>
      </div>
    </article>
  );
}

export default DescriptionPanel;