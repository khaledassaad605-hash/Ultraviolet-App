// This file overwrites the stock UV config.js

self.__uv$config = {
	prefix: "/uv/service/",
	wisp: "wss://wisp.mercurynetwork.co/", // Added public backend relay line
	encodeUrl: ultraviolet.codec.xor.encode,
	decodeUrl: ultraviolet.codec.xor.decode,
	handler: "/uv/uv.handler.js",
	client: "/uv/uv.client.js",
	bundle: "/uv/uv.bundle.js",
	config: "/uv/uv.config.js",
	sw: "/uv/uv.sw.js",
};
