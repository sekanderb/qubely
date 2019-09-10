const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

import './style.scss'
import Edit from './Edit'
import Save from './Save'

registerBlockType('qubely/testimonialcarousel', {
	title: __('testimonial carousel'),
	icon: 'dashboard',
	category: 'qubely',
	keywords: [
		__('Testimonial'),
		__('Carousel')
	],
	attributes: {
		uniqueId: { type: 'string', default: '' },
		items: { type: 'object', default: { md: '2', sm: '2', xs: '1' } },
		columns: { type: 'number', default: 2 },
		autoPlay: { type: 'boolean', default: false },
		dots: { type: 'boolean', default: true },
		dragable: { type: 'boolean', default: true },
		dotIndicator: { type: 'boolean', default: true },
		nav: { type: 'boolean', default: true },
		interval: { type: 'number', default: 1000 },
		speed: { type: 'number', default: 800 },
		carouselItems: {
			type: 'array',
			default: [
				{
					author: 'James Moriarty',
					designation: 'Web WordPress Developer',
					message: '“Innovative Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
					ratings: '5',
					avatar: {}
				},
				{
					author: 'Julia Toufis',
					designation: 'WordPress Developer',
					message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
					ratings: '4.5',
					avatar: {}
				},
				{
					author: 'Mila Kunis',
					designation: 'WordPress Developer',
					message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
					ratings: '4.5',
					avatar: {}
				},
				{
					author: 'Arthur Conan Doyle',
					designation: 'Writer',
					message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
					ratings: '5',
					avatar: {}
				},
				{
					author: 'John Deo',
					designation: 'WordPress Developer',
					message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
					ratings: '5',
					avatar: {}
				},
				{
					author: 'Alex Fera',
					designation: 'WordPress Developer',
					message: '“Gutenberg blocks than using Qubely Gutenberg Blocks Toolkit. Instantly raise your website appearance with this stylish new plugin.”',
					ratings: '5',
					avatar: {}
				},
			]
		},

		/*---------------------------------------------------
		* 	Testimonial Layouts:  common/style attributes
		* --------------------------------------------------- */
		layout: { type: 'number', default: 1 },
		alignment: { type: 'object', default: { md: 'center' }, style: [{ selector: '{{QUBELY}} .qubely-tesitmonial-item {text-align: {{alignment}};}' }] },
		spacer: { type: 'object', default: { spaceTop: { md: '10', unit: "px" }, spaceBottom: { md: '10', unit: "px" } }, style: [{ selector: '{{QUBELY}}' }] },

		// Number of slider.
		sliderNumber: { type: 'number', default: 5 },
		// Item per Slider  
		itemPerSlides: { type: 'string', default: '2' },
		// Space Between Two item.
		sliderItemsSpace: {
			type: 'objext',
			default: {},
			style: [{
				selector: '{{QUBELY}} .qubely-carousel .qubely-carousel-extended-list .qubely-carousel-item { padding: 0 {{sliderItemsSpace}}; }'
			}]
		},
		// Infinite Loop
		infiniteLoop: { type: 'boolean', default: true },
		isCentered: { type: 'boolean', default: false },
		activeFade: { type: 'boolean', default: false },
 
		/*------------------------------------
		* 			Slider Settings 			
		-------------------------------------- */
		arrowStyle: {type: 'string', default: 'arrowright' },
		horizontalScroll: { 
			type: 'object', 
			default: { md: 0, unit: '%' }, 
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control { right: {{horizontalScroll}} } {{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.prev-control { left: {{horizontalScroll}} }  ' }
			] 	
		},
		arrowPosition: {type: 'string', default: 'center' },
		cornerRadius: { 
			type: 'string', 
			default: { md: 4, unit: 'px' }, 
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel-nav-control .nav-control { border-radius: {{cornerRadius}}; } ' }
			] 
		},
		arrowSize: { 
			type: 'string', 
			default: '20',
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel-nav-control .nav-control .dashicons { font-size: {{arrowSize}}px; } ' }
			]
		},
		// Section Arrow 
		arrowColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-block-testimonial-carousel .nav-control .dashicons { color:{{arrowColor}}; }' }] },
		arrowShapeColor: {
			type: 'object', default: {},
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control' },
			],
		},
		arrowBorderColor: {
			type: 'object',
			default: { openTy: 0, color: '#3373dc', width: { bottom: '1', left: '1', right: '1', top: '1', unit: 'px' } },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control' }]
		},

		// Arrow Hover Color.
		arrowHoverColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-carousel-nav-control .nav-control:hover .dashicons { color:{{arrowHoverColor}}; }' }] },
		arrowShapeHoverColor: {
			type: 'object', default: {},
			style: [
				{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control:hover' },
			],
		},
		arrowBorderHoverColor: {
			type: 'object',
			default: { openTy: 0, color: '#3373dc', width: { bottom: '1', left: '1', right: '1', top: '1', unit: 'px' } },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-nav-control .nav-control.next-control:hover' }]
		},

		// Dot Navigation.
		dotSize: {
			type: 'string',
			default: '30',
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active{ width: calc(15px + {{dotSize}}px )} {{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li{ width: {{dotSize}}px } ' }]
		},
		// Dot
		dotColor: {
			type: 'object',
			default: { openTy: 0, color: '#f4f4f4', width: { bottom: '1', left: '1', right: '1', top: '1', unit: 'px' } },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li' }]
		},
		dotBorderColor: {
			type: 'object',
			default: { openTy: 0, color: '#f4f4f4', width: { bottom: '1', left: '1', right: '1', top: '1', unit: 'px' } },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li' }]
		},

		// Dot Active color
		dotActiveColor: {
			type: 'object',
			default: { openTy: 0, color: '#2084f9', width: { bottom: '1', left: '1', right: '1', top: '1', unit: 'px' } },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active span.dot-indicator' }]
		},
		dotBorderActiveColor: {
			type: 'object',
			default: { openTy: 0, color: '#2084f9', width: { bottom: '1', left: '1', right: '1', top: '1', unit: 'px' } },
			style: [{ selector: '{{QUBELY}} .qubely-carousel.qubely-carousel-wrapper .qubely-carousel-dots ul li.active' }]
		},

		//Name
		nameColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-testimonial-author-name { color:{{nameColor}}; }' }] },
		nameTypo: { type: 'object', default: { openTypography: 1, weight: 700, size: { md: 16, unit: 'px' } }, style: [{ selector: '{{QUBELY}} .qubely-testimonial-author-name' }] },
		nameSpacing: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-testimonial-author-name {margin-bottom: {{nameSpacing}};}' }] },

		//Designation
		designationColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-testimonial-author-designation { color:{{designationColor}}; }' }] },
		designationTypo: { type: 'object', default: { openTypography: 1, size: { md: 14, unit: 'px' } }, style: [{ selector: '{{QUBELY}} .qubely-testimonial-author-designation' }] },

		/*------------------------------------
		* 			Messsage 
		* ------------------------------------ */
		messagePosition: { type: 'string', default: 'top' },
		messageTypo: {
			type: 'object',
			default: {
				openTypography: 1,
				size: { md: 16, unit: 'px' }
			},
			style: [{ selector: '{{QUBELY}} .qubely-testimonial-content' }]
		},
		messageSpacingTop: { type: 'object', default: { md: 0, unit: 'px' }, style: [{ selector: '{{QUBELY}} .qubely-testimonial-content {margin-top: {{messageSpacingTop}};}' }] },
		messageSpacingBottom: { type: 'object', default: { md: 5, unit: 'px' }, style: [{ selector: '{{QUBELY}} .qubely-testimonial-content {margin-bottom: {{messageSpacingBottom}};}' }] },

		/*------------------------------------
		* 			Avatar 
		* ------------------------------------ */
		showAvatar: { type: 'boolean', default: true },
		avatarLayout: { type: 'string', default: 'left' },
		avatarAlt: { type: 'string', default: '' },
		avatarSize: {
			type: 'string',
			default: '64px',
			style: [
				{
					condition: [
						{ key: 'avatarSize', relation: '!=', value: 'custom' }
					],
					selector: '{{QUBELY}} .qubely-testimonial-avatar { width: {{avatarSize}}; height: {{avatarSize}}; font-size: {{avatarSize}}; }'
				}
			]
		},
		avatarWidth: { type: 'object', default: { md: 120, unit: 'px' }, style: [{ condition: [{ key: 'avatarSize', relation: '==', value: 'custom' }], selector: '{{QUBELY}} .qubely-testimonial-avatar {width: {{avatarWidth}}; font-size: {{avatarWidth}};}' }] },
		avatarHeight: { type: 'object', default: { md: 120, unit: 'px' }, style: [{ condition: [{ key: 'avatarSize', relation: '==', value: 'custom' }], selector: '{{QUBELY}} .qubely-testimonial-avatar {height: {{avatarHeight}};}' }] },
		avatarSpacing: {
			type: 'object',
			default: {
				md: 20,
				unit: 'px'
			},
			style: [
				{
					condition: [
						{ key: 'avatarLayout', relation: '==', value: 'left' }
					],
					selector: '{{QUBELY}} .qubely-testimonial-avatar {margin-right: {{avatarSpacing}}; }'
				},
				{
					condition: [
						{ key: 'avatarLayout', relation: '==', value: 'right' }
					],
					selector: '{{QUBELY}} .qubely-testimonial-avatar {margin: 0px 0px 0px {{avatarSpacing}};}'
				},
				{
					condition: [
						{ key: 'avatarLayout', relation: '==', value: 'top' }
					],
					selector: '{{QUBELY}} .qubely-testimonial-avatar {margin: 0px 0px {{avatarSpacing}};}'
				},
				{
					condition: [
						{ key: 'avatarLayout', relation: '==', value: 'bottom' }
					],
					selector: '{{QUBELY}} .qubely-testimonial-avatar{margin: {{avatarSpacing}} 0px 0px;}'
				}
			]
		},
		avatarBorderRadius: {
			type: 'object',
			default: {
				openBorderRadius: 1,
				radiusType: 'global',
				global: { md: 100 },
				unit: '%'
			},
			style: [
				{ selector: '{{QUBELY}} .qubely-testimonial-avatar' }
			]
		},
		avatarBorder: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-testimonial-avatar' }] },

		/*------------------------------------
		* 			Quote 
		* ------------------------------------ */
		quoteIcon: { type: 'string', default: 'fas fa-quote-left' },
		quoteIconPosition: { type: 'string', default: 'top' },
		quoteIconSize: { type: 'object', default: { md: 48, unit: 'px' }, style: [{ condition: [{ key: 'quoteIcon', relation: '!=', value: '' }], selector: '{{QUBELY}} .qubely-quote-icon {font-size: {{quoteIconSize}};}' }] },
		quoteIconColor: { type: 'string', default: '#E2E2E2', style: [{ condition: [{ key: 'quoteIcon', relation: '!=', value: '' }], selector: '{{QUBELY}} .qubely-quote-icon {color: {{quoteIconColor}};}' }] },
		quoteIconSpacing: {
			type: 'object',
			default: {
				md: 20, unit: 'px'
			},
			style: [
				{
					condition: [
						{ key: 'layout', relation: '==', value: '1' },
						{ key: 'quoteIcon', relation: '!=', value: '' }
					],
					selector: '{{QUBELY}} .qubely-testimonial-quote {margin-bottom: {{quoteIconSpacing}};}'
				},
				{
					condition: [
						{ key: 'layout', relation: '==', value: '2' },
						{ key: 'quoteIcon', relation: '!=', value: '' }
					],
					selector: '{{QUBELY}} .qubely-testimonial-quote {margin-top: {{quoteIconSpacing}};}'
				}
			]
		},

		/*-----------------------------------
		* 				Ratings 
		------------------------------------- */
		showRatings: { type: 'boolean', default: true },
		ratings: { type: 'string', default: 4.5 },
		ratingsPosition: { type: 'string', default: 'bottom' },
		ratingsColor: { type: 'string', default: '#FFB800', style: [{ condition: [{ key: 'ratings', relation: '!=', value: '0' }], selector: '{{QUBELY}} .qubely-testimonial-ratings:before {color: {{ratingsColor}};} {{QUBELY}} .qubely-testimonial-ratings {color: {{ratingsColor}};}' }] },
		starsSize: { type: 'object', default: { md: 16, unit: 'px' }, style: [{ condition: [{ key: 'ratings', relation: '!=', value: '0' }], selector: '{{QUBELY}} .qubely-testimonial-ratings {font-size:{{starsSize}};}' }] },
		ratingsSpacing: {
			type: 'object',
			default: {
				md: 12,
				unit: 'px'
			},
			style: [
				{
					condition: [
						{ key: 'layout', relation: '==', value: '1' },
						{ key: 'ratings', relation: '!=', value: '0' }
					],
					selector: '{{QUBELY}} .qubely-testimonial-ratings {margin-bottom: {{ratingsSpacing}};}'
				},
				{
					condition: [
						{ key: 'layout', relation: '==', value: '2' },
						{ key: 'ratings', relation: '!=', value: '0' }
					],
					selector: '{{QUBELY}} .qubely-testimonial-ratings {margin-top: {{ratingsSpacing}};}'
				},
				{
					condition: [
						{ key: 'layout', relation: '==', value: '3' },
						{ key: 'layout', relation: '!=', value: '0' }
					],
					selector: '{{QUBELY}} .qubely-testimonial-ratings {margin-bottom: {{ratingsSpacing}};}'
				}
			]
		},

		/* ------------------------------------
		* 			Design 
		* ------------------------------------- */
		textColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-testimonial-carousel-content-wrapper { color:{{textColor}}; }' }] },
		bgPadding: {
			type: 'object',
			default: {},
			style: [
				{
					condition: [
						{ key: 'layout', relation: '==', value: '1' }
					],
					selector: '{{QUBELY}} .qubely-layout-1 .qubely-tesitmonial-item'
				},
				{
					condition: [
						{ key: 'layout', relation: '==', value: '2' }
					],
					selector: '{{QUBELY}} .qubely-layout-2 .qubely-tesitmonial-item'
				},
				{
					condition: [
						{ key: 'layout', relation: '==', value: '3' }
					],
					selector: '{{QUBELY}} .qubely-layout-3 .qubely-testimonial-carousel-content-wrapper'
				}
			]
		},
		// Background Color
		bgColor: {
			type: 'string',
			default: '',
			style: [
				{
					selector: '{{QUBELY}} .qubely-tesitmonial-item.layout-1 {background-color: {{bgColor}};} {{QUBELY}} .qubely-tesitmonial-item.layout-2 {background-color: {{bgColor}};}'
				},
				{
					condition: [
						{ key: 'layout', relation: '==', value: '3' }
					],
					selector: '{{QUBELY}} .layout-3 .qubely-testimonial-carousel-content-wrapper {background-color: {{bgColor}};} {{QUBELY}} .layout-3 .qubely-testimonial-carousel-content-wrapper:before {border-color: {{bgColor}} transparent transparent transparent;}'
				}
			]
		},
		// Border radius
		bgBorderRadius: {
			type: 'object',
			default: {
				openBorderRadius: 1,
				radiusType: 'global',
				global: { md: 20 },
				unit: 'px'
			},
			style: [
				{ selector: '{{QUBELY}} .qubely-layout-1 .qubely-tesitmonial-item, {{QUBELY}} .qubely-layout-2 .qubely-tesitmonial-item, {{QUBELY}} .qubely-layout-3 .qubely-testimonial-carousel-content-wrapper' }
            ]
        },
        border: { 
			type: 'object', 
			default: { openTy: 0, color: '#3373dc', width: { bottom: '1', left: '1', right: '1', top: '1', unit: 'px' } }, 
			style: [
				{ selector: '{{QUBELY}} .qubely-tesitmonial-item.layout-1, {{QUBELY}} .qubely-tesitmonial-item.layout-2, {{QUBELY}} .qubely-tesitmonial-item.layout-3 .qubely-testimonial-carousel-content-wrapper' }]
		},
		boxShadow: {
			type: 'object', default: {},
			style: [
				{ selector: '{{QUBELY}} .qubely-tesitmonial-item.layout-1, {{QUBELY}} .qubely-tesitmonial-item.layout-2, {{QUBELY}} .qubely-tesitmonial-item.layout-3 .qubely-testimonial-carousel-content-wrapper' }
			]
		},
		boxShadowHover: {
			type: 'object', default: {},
			style: [
				{ selector: '{{QUBELY}} .qubely-tesitmonial-item.layout-1:hover, {{QUBELY}} .qubely-tesitmonial-item.layout-2:hover, {{QUBELY}} .qubely-tesitmonial-item.layout-3 .qubely-testimonial-carousel-content-wrapper:hover' }
			]
		},
		showGlobalSettings: { type: 'boolean', default: true }, // Global Settings
		//showContextMenu: { type: 'boolean', default: true },
	},
	edit: Edit,
	save: Save
});
