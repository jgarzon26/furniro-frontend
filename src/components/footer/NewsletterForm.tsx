const NewsletterForm = () => {
  return (
    <div>
      <h6>Newsletter</h6>
      <form action="" className="flex gap-5 *:border-b">
        <input type="text" name="email" id="email" placeholder="Enter your email address" />
        <button type="submit" className="uppercase text-sm font-semibold hover:cursor-pointer">subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterForm;