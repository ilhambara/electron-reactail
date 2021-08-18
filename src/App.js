import logoReact from "./logo/react.svg";
import logoElectron from "./logo/electron.svg";
import logoTailwind from "./logo/tailwind.svg";
import "./App.css";

function App() {
	return (
		<div className="text-gray-50 text-center">
			<div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center">
				<div className="flex items-end">
					<img src={logoReact} className="" alt="logo" />
					<img src={logoElectron} className="App-logo" alt="logo" />
					<img src={logoTailwind} className="pl-2" alt="logo" />
				</div>
				<div className="mt-8 flex flex-col">
					<p className="text-xl">Boilerplate for desktop-based apps using</p>
					<code className="mt-4 rounded-md px-4 py-3 bg-gray-900 text-indigo-100 text-2xl">
						React + Electron + TailwindCSS
					</code>
					<p className="mt-6 text-lg">
						Coded by 👨‍💻{" "}
						<a
							className="text-blue-300 font-bold underline"
							href="https://ilhambara.vercel.app"
							target="_blank"
							rel="noopener noreferrer"
						>
							Ilhambara
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
