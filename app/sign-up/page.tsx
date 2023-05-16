import Checkbox from '@/components/form/checkbox/checkbox';
import TextInput from '@/components/form/input/text-input';
import Button from '@/components/ui/button/button';
import Text from '@/components/ui/text';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SigninLayout from '../sign-in/signin-layout';

export default function SignUp() {
	const leftSide = (
		<div className='hidden lg:block col-span-1 h-screen relative'>
			<Image
				src='/img/card-colors.png'
				alt='Card Colors'
				height={1080}
				width={1080}
				priority
				className='w-full h-full object-cover object-left'
			/>
			<div className='h-full w-full bg-black/40 flex flex-col justify-center items-center absolute top-0 left-0 text-white'>
				<div className='w-full h-[50%] bg-gradient-to-b from-black/0 via-black/75 to-black/100 absolute bottom-0 left-0'></div>
				<div className=' h-[500px] xl:h-[650px] 2xl:h-[750px] w-full flex flex-col justify-end z-50'>
					<div className='mx-auto max-w-[400px] xl:w-[479px] xl:text-xl text-regular font-bold '>
						<p className='text-center mb-5 xl:mb-10'>
							Exchange your business information with ease,
							go paperless with our digital business card!
						</p>
						<Button
							variant='secondary'
							className='w-full'
							href='/sign-in'
						>
							Sign In
						</Button>
					</div>
				</div>
			</div>
		</div>
	);

	const rightSide = (
		<div className='flex flex-col justify-center items-center col-span-2 lg:col-span-1 px-3 lg:px-0 pt-10 lg:pt-0'>
			<form className='overflow-hidden bg-white flex flex-col justify-between max-w-[400px] h-[500px] xl:h-[650px] 2xl:h-[750px]'>
				<div className='mx-auto h-6 xl:h-10 mb-5'>
					<Image
						src='/img/logo_full_black.svg'
						alt='ISCE Connect Logo'
						height={48}
						width={132}
						className='object-cover object-center w-full h-full'
					/>
				</div>
				<div className=''>
					<div className='flex flex-col justify-center items-center xl:gap-2 mb-4 xl:mb-6'>
						<Text
							color='black'
							className='text-large xl:text-2xl text-center font-bold'
						>
							Get Started
						</Text>
						<p className='max-w-[400px] text-tiny xl:text-base text-center text-black'>
							Start your journey with ISCE connect for
							business.
						</p>
					</div>
					<div className='flex flex-col gap-3 xl:gap-6'>
						<div className='flex flex-col gap-2 xl:gap-6'>
							<TextInput
								className='w-full'
								label='Business Name'
								name='name'
							/>
							<TextInput
								className='w-full'
								variant='email'
								label='Business Email'
								name='email'
							/>
							<TextInput
								className='w-full'
								variant='phone'
								label='Contact Number'
								name='phone'
							/>
							<TextInput
								variant='password'
								className='w-full'
								label='Password'
								name='password'
							/>
							<TextInput
								variant='password'
								className='w-full'
								label='Confirm Password'
								name='confirmPassword'
							/>
						</div>
						<div className='flex justify-start items-start relative gap-3'>
							<div className='h-4 xl:h-6 w-4 xl:w-6'>
								<Checkbox checked={false} />
							</div>
							<p className='max-w-[364px] text-sm text-left text-black'>
								<span className='max-w-[364px] text-tiny xl:text-base text-left text-black'>
									By registering, you agree to our{' '}
									<Link
										href={'/terms'}
										className='font-bold'
									>
										Terms of Use
									</Link>{' '}
									and{' '}
									<Link
										href={'/privacy'}
										className='font-bold'
									>
										Privacy Policy
									</Link>
									.
								</span>
							</p>
						</div>
					</div>
				</div>
				<Button
					variant='primary'
					className='w-full'
				>
					Sign Up
				</Button>
			</form>
		</div>
	);
	return (
		<SigninLayout
			left={leftSide}
			right={rightSide}
		/>
	);
}
