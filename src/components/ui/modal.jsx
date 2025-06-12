import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogClose,
} from './dialog';

export function Modal({
	title,
	description,
	trigger,
	children,
	open,
	onOpenChange,
}) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			{trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
			<DialogContent className='w-[500px] max-w-full bg-[var(--background-color)] text-[var(--primary-text-color)] border border-[var(--primary-border-color)] !p-6 backdrop-blur-sm'>
				<DialogHeader>
					<DialogTitle className='text-[var(--primary-title-color)] text-xl font-semibold'>
						{title}
					</DialogTitle>
					{description && (
						<DialogDescription className='text-[var(--text-color)]'>
							{description}
						</DialogDescription>
					)}
				</DialogHeader>

				<div className='py-2'>{children}</div>
			</DialogContent>
		</Dialog>
	);
}
