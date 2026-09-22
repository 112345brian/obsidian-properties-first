import { App, PluginSettingTab, Setting } from 'obsidian';
import PropertiesFirstPlugin from './main';

export interface PropertiesFirstSettings {
	mySetting: string;
}

export const DEFAULT_SETTINGS: PropertiesFirstSettings = {
	mySetting: 'default',
};

export class PropertiesFirstSettingTab extends PluginSettingTab {
	plugin: PropertiesFirstPlugin;

	constructor(app: App, plugin: PropertiesFirstPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Settings #1')
			.setDesc("It's a secret")
			.addText((text) =>
				text
					.setPlaceholder('Enter your secret')
					.setValue(this.plugin.settings.mySetting)
					.onChange(async (value) => {
						this.plugin.settings.mySetting = value;
						await this.plugin.saveSettings();
					}),
			);
	}
}
