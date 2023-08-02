'use client';
import SettingsCard from '@/components/admin/settings/settings-card';
import { customizeIcon, editIcon, updateIcon } from '@/utils/icons';
import React, { Fragment } from 'react';

export default function Settings() {
	return (
		<Fragment>
			<div className='flex flex-wrap justify-center items-start p-10 gap-10 mt-10'>
				<SettingsCard
					title='Edit Business Profile'
					icon={editIcon}
					link='/admin/settings/edit-profile'
				/>
				<SettingsCard
					title='Customize Business Profile'
					icon={customizeIcon}
					link='/admin/settings/customize-profile'
				/>
				<SettingsCard
					title='Update Passwoord'
					icon={updateIcon}
					link='/admin/settings/update-password'
				/>
			</div>
		</Fragment>
	);
}
