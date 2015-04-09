function AppController(@mdBottomSheet) {
	var self = this;
	self.users  = [
		{
			name: 'Adeel Qureshi',
			avatar: 'svg-1',
			content: 'Some content'
		}
	];
	self.selected = self.users[0];
}

export default [AppController];