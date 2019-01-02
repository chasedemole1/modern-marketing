var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Enquiry Model
 * =============
 */

var Enquiry = new keystone.List('Enquiry', {
	nocreate: true,
	noedit: true,
});

Enquiry.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	enquiryType: { type: Types.Select, options: [
		{ value: 'marketresearch', label: 'Market Research' },
		{ value: 'webdevelopment', label: 'Web Development' },
		{ value: 'graphicdesign', label: 'Graphic Design' },
		{ value: 'socialmedia', label: 'Social Media' },
		{ value: 'branding', label: 'Branding' },
		{ value: 'seo', label: 'SEO' },
		{ value: 'other', label: 'Other' },
	] },
	message: { type: Types.Markdown, required: true },
	createdAt: { type: Date, default: Date.now },
});

Enquiry.defaultSort = '-createdAt';
Enquiry.defaultColumns = 'name, email, enquiryType, createdAt';
Enquiry.register();
