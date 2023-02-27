

export default function Footer() {
    return (
        <footer className="py-10 mt-24 bg-gray-50">
            <div className="container px-4 grid grid-cols-5">
                <div className="col-span-2">
                    <div className="flex-col">
                        <img
                            className="hidden lg:block h-16 w-auto"
                            src="/static/img/datahub-cube-edited.svg"
                            alt="Datopian Logo"
                        />
                        <p className="text-gray-500 mt-6 w-80">
                            At Datahub, we provide various solutions to Publish and Deploy your Data with power and simplicity.
                            Datahub is the fastest way for individuals, teams and organizations to publish, deploy and share their data.
                        </p>
                    </div>
                </div>
                <div className="flex-col">
                    <h3 className="font-bold">
                        LINKS
                    </h3>
                    <ul className="text-gray-500 mt-4">
                        <li className="mb-2">
                            <a href="/" className="hover:text-gray-600">Home</a>
                        </li>
                        <li className="mb-2">
                            <a href="https://datahub.io/docs/terms-of-service" className="hover:text-gray-600">Terms of Service</a>
                        </li>
                        <li className="mb-2">
                            <a href="https://datahub.io/docs/privacy" className="hover:text-gray-600">Privacy Policy</a>
                        </li>
                        <li className="mb-2">
                            <a href="https://docs.datahub.io/developers/api/" className="hover:text-gray-600">API</a>
                        </li>
                        <li className="mb-2">
                            <a href="/blog" className="hover:text-gray-600">Blog</a>
                        </li>
                    </ul>
                </div>

                <div className="flex-col">
                    <h3 className="font-bold">
                        SUPPORT
                    </h3>
                    <ul className="mt-4 text-gray-500">
                        <li className="mb-2">
                            <a href="https://discord.gg/KrRzMKU" className="hover:text-gray-600">Chat</a>
                        </li>
                        <li className="mb-2">
                            <a href="https://datahub.io/docs/faq" className="hover:text-gray-600">FAQ</a>
                        </li>
                    </ul>
                </div>

                <div className="flex-col">
                    <h3 className="font-bold">
                        CONTACT
                    </h3>
                    <ul className="text-gray-500 mt-4">
                        <li className="mb-2">
                            <a href="mailto:support@datahub.io" className="hover:text-gray-600">support@datahub.io</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container px-4 grid grid-cols-5 mt-16">
                <div className="col-span-2">
                    <p className="text-gray-500">
                        &copy; {new Date().getFullYear()} All Rights Reserved
                    </p>
                </div>
                <div>
                  <a href="https://datopian.com" target="_blank">
                    <img
                        className="hidden lg:block h-9 w-auto"
                        src="/static/img/datopian-logo.png"
                        alt="Datopian Logo"
                    />
                  </a>
                </div>
                <div>
                    <img
                        className="hidden lg:block h-10 w-auto"
                        src="/static/img/okfn-new-logo.png"
                        alt="Open Knowledge foundation Logo"
                    />
                </div>
                <div>
                    <img
                        className="hidden lg:block h-9 w-auto"
                        src="/static/img/sloan-foundation.png"
                        alt="Sloan Foundation Logo"
                    />
                </div>
            </div>
        </footer>
    )
}
