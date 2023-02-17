/**
 * External dependencies
 */
import { includes, merge, pickBy } from 'lodash';

export default function DynamicStyles( attributes ) {
	const {
        sliderQuoteIconSize, 
        sliderQuoteIconColor,
        sliderQuoteSpaceAfterIcon,
        sliderRatingIconSize,
        sliderRatingColor,
        sliderSpaceAfterRating,
        sliderImageSize,
        sliderTextFontFamily,
        sliderTextFontSize,
        sliderTextFontStyle,
        sliderTextFontWeight,
        sliderTextLineHeight,
        sliderTextTextTransform,
        sliderNameFontFamily,
        sliderNameFontSize,
        sliderNameFontStyle,
        sliderNameFontWeight,
        sliderNameLineHeight,
        sliderNameTextTransform,
        sliderPositionFontFamily,
        sliderPositionFontSize,
        sliderPositionFontStyle,
        sliderPositionFontWeight,
        sliderPositionLineHeight,
        sliderPositionTextTransform,
    } = attributes

    const transformData = ( data, fallback = {} ) => {
        let output = {}
        merge( output, fallback, data )
        return `${output?.top} ${output?.right} ${output?.bottom} ${output?.left}`
    }
    
    const transformBorder = ( data, type, fallback = {} ) => {
        let output = {}
        merge( output, processBorder( fallback ), processBorder( data ) )

        let newvar = output[ type ]
        return `${newvar?.width} ${newvar?.style} ${newvar?.color}`
    }

    const processBorder = data => {
        if ( typeof data == 'object' && Object.keys( data ).length == 3 ) {
            return {
                top: data,
                right: data,
                bottom: data,
                left: data
            }
        }
        return data
    }

	const styleProps = pickBy( {
        '--gutena--star-ratings-quote-icon-size': sliderQuoteIconSize,
        '--gutena--star-ratings-quote-icon-color': sliderQuoteIconColor,
        '--gutena--star-ratings-quote-icon-spacing': sliderQuoteSpaceAfterIcon,
        '--gutena--star-ratings-rating-icon-size': sliderRatingIconSize,
        '--gutena--star-ratings-rating-color': sliderRatingColor,
        '--gutena--star-ratings-rating-spacing': sliderSpaceAfterRating,
        '--gutena--star-ratings-image-size': sliderImageSize,
        '--gutena--star-ratings-text-font-family': sliderTextFontFamily,
        '--gutena--star-ratings-text-font-size': sliderTextFontSize,
        '--gutena--star-ratings-text-font-style': sliderTextFontStyle,
        '--gutena--star-ratings-text-font-weight': sliderTextFontWeight,
        '--gutena--star-ratings-text-line-height': sliderTextLineHeight,
        '--gutena--star-ratings-text-text-transform': sliderTextTextTransform,
        '--gutena--star-ratings-name-font-family': sliderNameFontFamily,
        '--gutena--star-ratings-name-font-size': sliderNameFontSize,
        '--gutena--star-ratings-name-font-style': sliderNameFontStyle,
        '--gutena--star-ratings-name-font-weight': sliderNameFontWeight,
        '--gutena--star-ratings-name-line-height': sliderNameLineHeight,
        '--gutena--star-ratings-name-text-transform': sliderNameTextTransform,
        '--gutena--star-ratings-position-font-family': sliderPositionFontFamily,
        '--gutena--star-ratings-position-font-size': sliderPositionFontSize,
        '--gutena--star-ratings-position-font-style': sliderPositionFontStyle,
        '--gutena--star-ratings-position-font-weight': sliderPositionFontWeight,
        '--gutena--star-ratings-position-line-height': sliderPositionLineHeight,
        '--gutena--star-ratings-position-text-transform': sliderPositionTextTransform,
        }, value => typeof value !== 'undefined' && '' !== value && 'NaN' !== value && 'none' !== value && ! includes( value, 'undefined' )
    )

	return styleProps
}