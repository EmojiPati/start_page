const defaultConfig = {
	username: "EmojiPati",
	theme: {
		backgroundColor: "#121317",
		windowColor: "#1e212b",
		glowColor: "#6b5cb157",
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#16161e",
		red: "#ec6183",
		green: "#2ed8a2",
		yellow: "#e8b195",
		blue: "#2bc3de",
		cyan: "#62e0e2",
		magenta: "#e069aa",
		violet: "#d1aff8",
		orange: "#ff8800"
	},
	wallpaper: {
		url: "",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: true,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		placeholderColor: "gray",
		userColor: "green",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "yellow",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow",
		image: "clear.png",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_self",
		defaultColor: "white",
		hoverColor: "violet"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "d",
				name: "DuckDuckGo Search",
				url: "https://duckduckgo.com/?q={}"
			},
			{
				alias: "b",
				name: "Brave Search",
				url: "https://search.brave.com/search?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "s",
				name: "Stack Overflow Search",
				url: "https://stackoverflow.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "w",
				name: "Wikipedia Search",
				url: "https://en.wikipedia.org/wiki/{}"
			}
		]
	},
	sections: {
		list: [
			{
				title: "General",
				color: "green",
				align: "left",
				links: [
					{
						name: "Portfolio",
						url: "https://pati.is-a.dev",
						icon: "simple-icons:aboutdotme"
					},
					{
						name: "ArtStation",
						url: "https://www.artstation.com/emojipati",
						icon: "fa-brands:artstation"
					},
					{
						name: "Github",
						url: "https://github.com/emojipati",
						icon: "simple-icons:github"
					},
					{
						name: "Digital Ocean",
						url: "https://cloud.digitalocean.com",
						icon: "fa-brands:digital-ocean"
					}
				]
			},
			{
				title: "Dev.",
				color: "magenta",
				align: "left",
				links: [
					{
						name: "Linode",
						url: "https://cloud.linode.com/",
						icon: "fa-brands:linode"
					},
					{
						name: "Netlify",
						url: "https://gitlab.com",
						icon: "simple-icons:vuetify"
					},
					{
						name: "Figma",
						url: "https://www.figma.com/",
						icon: "simple-icons:figma"
					},
					{
						name: "Supabase",
						url: "https://supabase.com/dashboard/",
						icon: "simple-icons:supabase"
					}
				]
			},
			{
				title: "Social",
				color: "violet",
				align: "left",
				links: [
					{
						name: "Twitter",
						url: "https://twitter.com",
						icon: "mdi:twitter"
					},
					{
						name: "4chan",
						url: "https://www.4chan.org/",
						icon: "simple-icons:4chan"
					},
					{
						name: "Misskey.dev",
						url: "https://misskey.dev/@pati",
						icon: "simple-icons:misskey"
					},
					{
						name: "Discord",
						url: "https://dsc.bio/emojipati",
						icon: "simple-icons:discord"
					}
				]
			},
			{
				title: "Fun",
				color: "cyan",
				align: "left",
				links: [
					{
						name: "YouTube Music",
						url: "https://youtubemusic.com",
						icon: "simple-icons:youtubemusic"
					},
					{
						name: "YouTube",
						url: "https://youtube.com/",
						icon: "simple-icons:youtube"
					}
				]
			},
			{
				title: "Anime & Manga",
				color: "blue",
				align: "left",
				links: [
					{
						name: "MangaDex",
						url: "https://mangadex.com/",
						icon: "simple-icons:mdbook"
					},
					{
						name: "9Anime",
						url: "https://9anime.to/",
						icon: "arcticons:animeultima"
					},
					{
						name: "AniList",
						url: "https://anilist.co/",
						icon: "simple-icons:anilist"
					},
					{
						name: "Livechart",
						url: "https://www.livechart.me/",
						icon: "ph:calendar-fill"
					}
				]
			},
			{
				title: "Random",
				color: "yellow",
				align: "left",
				links: [
					{
						name: "CivitAI",
						url: "https://civitai.com/",
						icon: "pajamas:tanuki-ai"
					},
					{
						name: "Modrinth",
						url: "https://modrinth.com",
						icon: "simple-icons:modrinth"
					},
					{
						name: "SatisF. Calculator",
						url: "https://satisfactory-calculator.com/",
						icon: "simple-icons:blueprint"
					},
					{
						name: "Cloudflare",
						url: "https://dash.cloudflare.com/",
						icon: "simple-icons:cloudflare"
					}
				]
			}
		]
	}
}

export default defaultConfig
