import Image from "next/image";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="w-screen h-[60vh] px-3 lg:flex items-center justify-center gap-2">
      <Image
        src="https://ci3.googleusercontent.com/mail-img-att/AGAZnRo7i-KLELzQsfNRsafYW3rjXzjBCZonQJr1b2dxhUgPuauIzkfh3Gm047URZ42B6XRBbcckaJbx7bW0AbI6MHUJHOlU51zm2FQU1xmoXjZwclkLaaF7-GGv7fFbvS80pzKQxLODMZeKW0ZgReIbcxxTA4IRhIbb8S4tieuoj16xvZLJdSokk1gVYbAi5yjgtC6BdzdhRu7WRyeTafPyn6AoLW_U774Za3mZ6Tl4JPmBEMlLRbPX7t2Va6HeeDdD4XKL7fbTgyx1scaXU8fD5112hje-blBrxbcNxBWZsq_LJ79IG4rzsnZaRmWLPgWBeFUb_BDCTd3yb2biK0Oy9MLBxgRFC0FcK-m-iurhh3KN0pT-MzJuMqI9ksoGhoFJAIR-bP3ZMGcl4buKbGHc71ne8cS_LUd1BDQTHuQbP5_i0-C2EWruC-Mo5r0aDolqu2QzP4DBVm10tQPhXRa-eJr8_OFQTJjPirLuOHmCoDb5pevoFg7Mb6Ny9FS6Vm4rXhyZQGBNsbI3Z33Y2v96AsMsFmEJxCHZBnMiofdcah7MwPMsqxyvnB_NRRKmYI8hzKLj0zNVV-iBnmbLVY_5zTCwPEq5Sjd6WdnPl8z8h-ahU2TrfZ7Am3mRo0nmAegNvWgQ2CWM-KbGYK44UB22zNIgcVbyGYWFM-gqitj-xLX_mD41Mjnm-7iXOBKmLZZwajUIyA8umSNzUatw93KIrYDZdbFGEHqNCo3cPnoUfm-ReCeQHxq5hOgoClcRmsIODUTUKW3G52NfQKBspMCUbJnBdMWLt9r9gVfFxnXw41BlmA0ga5_l875XH_p-srZZI3o9ANqp6i7jSIv9R760becLDSw0cSCxfULQ_Ei4GOr9qasMF22yRdRQzYJkfQ2ocj5EDNLnGTlGGw_S1v8fHIn9A0bBCK2nTwwndBpHlpUOJ8_UGgig3XNx6SVqiPTxaZj78G5AT_CLxv4vUSoooJvCWTpTrSl2u41j_mXchwZGXv89PEAkGT6t6WhRoh4WgOKwXeuzpLaOwF0DY7s84m43PC1W2QBhAmoY6F_zn3-2F-XUHFUlF3psH-xGWGeV8z8-l8C8XLZGzh2oOM9F0_m5=s0-l75-ft"
        alt=""
        className="lg:w-[45%] w-full rounded-xl p-2"
      />
      <div className="lg:w-1/2 w-5/6 mx-auto text-center flex flex-col gap-2">
        <h1 className="font-bold text-2xl rounded-xl px-1 mt-4 lg:mt-0">
          My dearest mum was talking to me on the phone about her week being
          filled with divine appointments.
        </h1>
        <br />
        <p>
          At the vibrant age of 93, she remains dedicated to her commitments:
          teaching Sunday school, managing a condo with 30 units, and overseeing
          a small business.
        </p>
        <p>
          Recently, she found herself in need of a new lawn mower and
          serendipitously connected with someone who not only had the perfect
          replacement but also offered valuable advice. Her week unfolded
          seamlessly, marked by one divine appointment after another, as she
          efficiently accomplished her tasks to high standards.
        </p>
        <p className="mb-4 lg:mb-0">
          Its a life we could all aspire to - one infused with the abundance of
          the Lord, where everything falls into place with grace and efficiency.
          My hope for you is that this platform fills your days with similar
          blessings and divine encounters, akin to experiencing the Kingdom of
          God. Just as the mustard seed grows into a large tree where birds find
          shelter, may you find richness and fulfillment in your journey. (Luke
          13:18-19)
        </p>
      </div>
    </div>
  );
};

export default Page;
