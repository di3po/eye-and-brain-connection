let channel_tv_1 = document.getElementById("channel_tv_1")
let channel_tv_2 = document.getElementById("channel_tv_2")
let channels = document.getElementById("channels")


let turned = 'on'
let last_channel_id = null;

function handleTvButtonsClick(id)
{
	if(id == 'channel_btn_1')
	{
		if(turned == 'on')
		{
			turned = 'off'
			channel_tv_1.style.display = 'none'
			channel_tv_2.style.display = 'none'
			channels.style.background = 'black'
		}
		else
		{
			if(last_channel_id != null) handleTvButtonsClick(last_channel_id)
			turned = 'on'
			channel_tv_1.style.display = 'block'
			channels.style.background = 'gray'
		}
	}

	if(id == 'channel_btn_2')
	{
		channel_tv_1.style.display = 'none'
		channel_tv_2.style.display = 'flex'
	}

	if(id == 'channel_btn_3')
	{
		channel_tv_2.style.display = 'none'
		channel_tv_1.style.display = 'block'
	}

	if(id != 'channel_btn_1') last_channel_id = id
	console.log('watched this at last', last_channel_id)
}