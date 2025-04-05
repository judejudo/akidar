import React from "react";

export function SecurityFencing() {
  return (
    <div>
      <article className="flex flex-col overflow-hidden">
        {/* Service Introduction Section */}
        <section className="mb-12">
          <div className="text-[rgba(65,65,65,1)] text-2xl font-normal leading-[35px]">
            <h3 className="font-bold">What we offer</h3>
            <p>
              At AKIDAR SECURITY LIMITED, we offer a wide range of security fencing
              solutions, including:
            </p>
            <ul className="list-disc pl-6 my-2">
              <li>Welded Mesh fences</li>
              <li>Chain Link fences</li>
              <li>Palisade security fences</li>
            </ul>

            <p className="mt-4">
              We also provide services for fitting perimeter walls and installing
              automated gates. Our company handles both the supply and installation
              of these security measures.
            </p>

            <h3 className="font-bold mt-6">Design & Considerations</h3>
            <p>
              Working closely with our technical team, customers can select a fence
              design that best suits their property. This selection process involves
              considering two key aspects:
            </p>
            <ul className="list-disc pl-6 my-2">
              <li>
                Form: The stylistic considerations and aesthetic appearance of the
                fence.
              </li>
              <li>
                Function: The practical purpose the fencing will serve in terms of
                security and boundary definition.
              </li>
            </ul>

            <h3 className="font-bold mt-6">Common Security Fence Types</h3>
            <p>The most common types of security fences we offer include:</p>
            <ul className="list-disc pl-6 my-2">
              <li>Electrical fences</li>
              <li>Razor wire fences</li>
            </ul>
          </div>
        </section>

        {/* Service Package Section */}
        <section>
          <div className="mb-8 text-3xl">What this package includes</div>

          {/* First row */}
          <div className="w-full max-w-[932px] mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/4a94a09c15f95dd5e94306f1bdfb3aed5b2e5a5d?placeholderIfAbsent=true"
                  alt="Fence Material"
                  className="aspect-[0.98] object-contain w-full rounded-[10px]"
                />
              </div>
              <div>
                <div className="mt-[38px]">
                  <div className="text-[rgba(65,65,65,1)] text-2xl font-semibold">
                    Fence Material Supply
                    <br />
                    <br />
                    <span className="font-normal">Supply of high-quality fencing materials (Welded Mesh, Chain Link, Palisade, etc.)</span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/448c1fbace8cb1da3a21f9effd33d69becc4cc68?placeholderIfAbsent=true"
                  alt="Professional Installation"
                  className="aspect-[0.97] object-contain w-full rounded-[10px] mt-[38px]"
                />
              </div>
            </div>
          </div>

          {/* Second row */}
          <div className="w-full max-w-[939px] mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="md:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <div className="text-[rgba(65,65,65,1)] text-2xl font-semibold">
                      Automated Gate Installation
                      <br />
                      <br />
                      <span className="font-normal">Installation of automated gate systems for controlled access</span>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/3d8b663fc82a8aec7c12568ab2edf334205ecb2d?placeholderIfAbsent=true"
                      alt="Automated Gate"
                      className="aspect-[0.97] object-contain w-full rounded-[10px]"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="text-[rgba(65,65,65,1)] text-2xl font-semibold">
                  Professional Fence Installation
                  <br />
                  <br />
                  <span className="font-normal">Expert installation of the selected security fencing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Third row */}
          <div className="w-full max-w-[979px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/1dc63fb312dab6526e693bb90b98d48c4b1d85a1?placeholderIfAbsent=true"
                  alt="Security Fence Consultation"
                  className="aspect-[1.83] object-contain w-full rounded-[10px] mt-[21px]"
                />
              </div>
              <div>
                <div className="flex flex-col text-2xl text-[rgba(65,65,65,1)] font-semibold">
                  <div className="z-10 flex items-stretch gap-[33px]">
                    <div className="grow">
                      Security Fence Consultation & Design
                      <br />
                      <br />
                      <span className="font-normal">
                        Expert consultation to determine the best fencing solution
                        based on form and function requirements
                      </span>
                    </div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/1c601e680bb283ee2fdd1bc8043dbf9999f9dcfb?placeholderIfAbsent=true"
                      alt="Divider"
                      className="aspect-[0.03] object-contain w-[7px] shrink-0"
                    />
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/598858b199bfe782cef2b72afdaae5f2f5905eda?placeholderIfAbsent=true"
                    alt="Icon"
                    className="aspect-[1] object-contain w-[41px] mt-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
