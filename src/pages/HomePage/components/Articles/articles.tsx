const articles = () => {
  return (
    <div className="bg-white text-black text-left md:p-4">
      <div className="md:grid md:grid-cols-2 gap-x-4">
        <div className="mb-2">
          <img
            className="aspect-video object-cover"
            src="https://picsum.photos/900/400?random=1"
          ></img>
          <div className="p-4">
            <h1 className="font-bold text-base mb-2">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur velit debitis qui sed, similique odio!
            </p>
          </div>
        </div>
        <div className="mb-2">
          <img
            className="aspect-video object-cover"
            src="https://picsum.photos/900/400?random=2"
          ></img>
          <div className="p-4">
            <h1 className="font-bold text-base mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              quaerat!
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              tenetur dolorum eius eligendi dolorem quaerat!
            </p>
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 gap-x-4">
        <div className="mb-2">
          <img
            className="aspect-video object-cover"
            src="https://picsum.photos/900/400?random=3"
          ></img>
          <div className="p-4">
            <h1 className="font-bold text-base mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </h1>
          </div>
        </div>
        <div className="mb-2">
          <img
            className="aspect-video object-cover"
            src="https://picsum.photos/900/400?random=4"
          ></img>
          <div className="p-4">
            <h1 className="font-bold text-base mb-2">
              Lorem ipsum dolor sit amet.
            </h1>
          </div>
        </div>
        <div className="mb-2">
          <img
            className="aspect-video object-cover"
            src="https://picsum.photos/900/400?random=5"
          ></img>
          <div className="p-4">
            <h1 className="font-bold text-base mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
          </div>
        </div>
        <div className="mb-2">
          <img
            className="aspect-video object-cover"
            src="https://picsum.photos/900/400?random=6"
          ></img>
          <div className="p-4">
            <h1 className="font-bold text-base mb-2">Lorem ipsum dolor sit.</h1>
          </div>
        </div>
        <div className="mb-2">
          <img
            className="aspect-video object-cover"
            src="https://picsum.photos/900/400?random=7"
          ></img>
          <div className="p-4">
            <h1 className="font-bold text-base mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h1>
          </div>
        </div>
        <div className="mb-2">
          <img
            className="aspect-video object-cover"
            src="https://picsum.photos/900/400?random=8"
          ></img>
          <div className="p-4">
            <h1 className="font-bold text-base mb-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
              qui.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default articles;
