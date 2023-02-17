/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { useEffect } from '@wordpress/element'
import { BlockControls, InspectorControls, useBlockProps } from '@wordpress/block-editor'
import { 
	__experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    Icon, 
    PanelBody, 
    ColorPalette, 
    BaseControl, 
    RangeControl,
    ToolbarDropdownMenu
} from '@wordpress/components'
import { 
	alignCenter, 
	alignLeft, 
	alignRight 
} from '@wordpress/icons';

// block ids
const gutenaRatingsiUniqueIds = [];

export default function edit( { clientId, attributes, setAttributes } ) {
    const { 
        uniqueId,
        position,
        numRating,
        ratingScale,
        iconSize,
        iconColor,
        blockStyles 
    } = attributes

    const blockProps = useBlockProps( {
        className: `gutena-star-ratings-block gutena-star-ratings-block-${ uniqueId } align-${ position }`,
    } )

    const fullStar = Math.floor( numRating );
	const halfStar = numRating % 1 === 0 ? 0 : 1;
	const emptyStar = ratingScale - ( fullStar + halfStar );

    const aligns = {
		left: {
			icon: alignLeft,
			title: __( 'Left', 'gutena-star-ratings' )
		},
		center: {
			icon: alignCenter,
			title: __( 'Center', 'gutena-star-ratings' )
		},
		right: {
			icon: alignRight,
			title: __( 'Right', 'gutena-star-ratings' )
		}
	}

    // Prevent overflow
    useEffect( () => {
        if ( numRating > ratingScale ) {
            setAttributes( { numRating: ratingScale } )
        }
    }, [ ratingScale ] )

    // Set block unique Id
    useEffect( () => {
        if ( ! uniqueId || gutenaRatingsiUniqueIds.includes( uniqueId ) ) {
			setAttributes( {
				uniqueId: clientId.substr( 2, 9 ),
			} );
			gutenaRatingsiUniqueIds.push( clientId.substr( 2, 9 ) );
		} else {
			gutenaRatingsiUniqueIds.push( uniqueId );
		}
    }, [] )

    return (
        <>
            <BlockControls group="block">
				<ToolbarDropdownMenu
					icon={ aligns?.[ position ]?.icon }
					label={ __( 'Position', 'gutena-star-ratings' ) }
					controls={ Object.keys( aligns ).map( align => {
						{
							const isActive = align === position;
							return {
								icon: aligns?.[ align ]?.icon,
								label: aligns?.[ align ]?.title,
								title: sprintf(
									// translators: %s: Title
									__( 'Align %s', 'gutena-star-ratings' ),
									aligns?.[ align ]?.title
								),
								isActive,
								onClick: () => setAttributes( { position: align } ),
								role: 'menuitemradio',
							};
						}
					} ) }
				/>
			</BlockControls>
            <InspectorControls>
                <PanelBody title={ __( 'Rating Settings', 'gutena-star-ratings' ) }>
                    <ToggleGroupControl label={ __( 'Position', 'gutena-star-ratings' ) } value={ position } onChange={ ( value ) => setAttributes( { position: value } ) } isBlock>
                        <ToggleGroupControlOption value="left" label={ __( 'Left', 'gutena-star-ratings' ) } />
                        <ToggleGroupControlOption value="center" label={ __( 'Center', 'gutena-star-ratings' ) } />
                        <ToggleGroupControlOption value="right" label={ __( 'Right', 'gutena-star-ratings' ) } />
                    </ToggleGroupControl>
                    <RangeControl
                        label={ __( 'Rating Scale', 'gutena-star-ratings' ) }
                        value={ ratingScale }
                        onChange={ ( value ) => setAttributes( { ratingScale: value } ) }
                        min={ 5 }
                        max={ 10 }
                        step={ 1 }
                    />
                    <RangeControl
                        label={ __( 'Rating', 'gutena-star-ratings' ) }
                        value={ numRating }
                        onChange={ ( value ) => setAttributes( { numRating: value } ) }
                        min={ 0.5 }
                        max={ ratingScale }
                        step={ 0.5 }
                    />
                    <RangeControl
                        label={ __( 'Icon Size', 'gutena-star-ratings' ) }
                        value={ iconSize }
                        onChange={ ( value ) => setAttributes( { iconSize: value } ) }
                    />
                    <BaseControl label={ __( 'Icon Color', 'gutena-star-ratings' ) } __nextHasNoMarginBottom={ false }>
                        <ColorPalette
                            value={ iconColor }
                            colors={ [
                                { name: 'red', color: '#f00' },
                                { name: 'white', color: '#fff' },
                                { name: 'blue', color: '#00f' },
                            ] }
                            onChange={ ( value ) => setAttributes( { iconColor: value } ) }
                        />
                    </BaseControl>
                </PanelBody>
            </InspectorControls>

            <div { ...blockProps }>
                { fullStar
                    ? [ ...Array( fullStar ).keys() ].map( ( item, index ) => (
                        <Icon key={ index } className="gutena-full-rating" size={ iconSize } style={ { fill: iconColor } } icon={ 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/></svg>
                        } />
                    ) )
                    : null 
                }
                { halfStar ? (
                        <Icon className="gutena-half-rating" size={ iconSize } style={ { fill: iconColor } } icon={ 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 14.656l2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708v6.948zM12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17z"/></svg>
                        } />
                    ) : null 
                }
                { emptyStar && emptyStar >= 0
                    ? [ ...Array( emptyStar ).keys() ].map( ( item, index ) => (
                        <Icon key={ index } className="gutena-empty-rating" size={ iconSize } style={ { fill: iconColor } } icon={ 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17zm0-2.344l2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708l-1.268 3.047-3.29.264 2.507 2.147-.766 3.21L12 14.657z"/></svg>
                        } />
                    ) )
                    : null 
                }
            </div>
        </>
    )
}
