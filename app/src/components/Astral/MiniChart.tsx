import { select, Selection, ValueFn } from 'd3-selection'
import { arc, Arc, DefaultArcObject } from 'd3-shape'
import { iAstralChart, sign_names } from './AstralChart'
import { useEffect } from 'react'


type SVG = Selection<SVGSVGElement, unknown, HTMLElement, any>
export type HouseNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |12

export interface iPlanet { 
    name:Planet,
    house: HouseNumber,
    degrees: number, 
    text: string 
}

interface iMappedPlanet {
    house: HouseNumber,
    text: string, 
    degree: number, 
    name: Planet,
    path: string, 
    color: DeepColor    
}

const x_center = 150
const y_center = 150
const radius = 50
const circles = [50, 52, 60, 62, 130, 135, 148, 150]

type Color = '#FFFEDD' | '#FDEDF6' | '#E0FCDF' | '#DFFFF9'
const colors:Color[] = ['#FFFEDD', '#FDEDF6', '#E0FCDF', '#DFFFF9']


const house_colors = ['#E0FCDF', '#DFFFF9', '#FFFEDD', '#FDEDF6']

type DeepColor = '#950193' | '#B16148' | '#1528B2' | '#054D1B'
const deep_colors = ['#950193', '#B16148', '#1528B2', '#054D1B'] // fire , earth , air , water
const sign_imgs = sign_names.map(sign => `/signs/${sign}.png`) 

const planet_names = [ 
    'Sun', 
    'Moon', 
    'Mercury', 
    'Venus', 
    'Mars', 
    'Jupiter', 
    'Saturn', 
    'Uranus', 
    'Neptune', 
    'Pluto', 
    'North Node', 
    'South Node'
] as const
export type Planet =  typeof planet_names[number]

const get_element = (color:DeepColor) => ({ '#950193': 'fire', '#B16148': 'terra', '#1528B2': 'air', '#054D1B': 'water' })[color]

interface iGetArc { grade_one:number, grade_two:number, depth:number}
const get_arc_middle = ({ grade_one, grade_two, depth }:iGetArc) => ({
    x: Math.sin((grade_one + (grade_two - grade_one)/2)*Math.PI/180)*depth + 150,
    y: 150 - Math.cos((grade_one + (grade_two - grade_one)/2)*Math.PI/180)*depth
})

const get_new_arc_middle = ({ grade_one, grade_two, depth }:iGetArc) => ({
    x: Math.sin((grade_one + (grade_two - grade_one)/2)*Math.PI/180)*depth + 150,
    y: 150 - Math.cos((grade_one + (grade_two - grade_one)/2)*Math.PI/180)*depth
})


const get_x = (id:HouseNumber, x:number) => ({
    0: -10, 
    1: -8, 
    2: -6, 
    3: 3, 
    4: -2, 
    5: -6, 
    6: -6, 
    7: -6, 
    8: -4, 
    9: -2, 
    10: -11, 
    11: -13, 
    12: -10
})[id || 12] + x

const get_y = (id:HouseNumber, y:number) => ({
    0: -12, 
    1: -14, 
    2: -12, 
    3: -6, 
    4: 0, 
    5: 0,
    6: -6, 
    7: -6, 
    8: -4, 
    9: 2, 
    10:-6, 
    11:-14, 
    12: -10
})[id || 11] + y


const find_conjunctions = (planets:iMappedPlanet[]) => planets.map(({degree: i, name: n}) => planets
    .filter(({degree: j}) => (i - j) > 0 && 10 > (i - j))
    .map(({ degree: j, name: m }) => [{planet: n, degree: i, color:'green'}, {planet: m, degree: j, color:'green'}])
).flat()

const find_semi_sextils = (planets:iMappedPlanet[]) => planets.map(({degree: i, name: n}) => planets
    .filter(({degree: j }) => (i - j) > 28 && 32 > (i - j))
    .map(({ degree: j, name: m }) => [{planet: n, degree: i, color:'green'}, {planet: m, degree: j, color:'green'}])
).flat()

const find_sextils = (planets:iMappedPlanet[]) => planets.map(({degree: i, name: n}) => planets
    .filter(({degree: j }) => (i - j) > 57 && 63 > (i - j))
    .map(({ degree: j, name: m }) => [{planet: n, degree: i, color:'green'}, {planet: m, degree: j, color:'green'}])
).flat()

const find_cuadratures = (planets:iMappedPlanet[]) => planets.map(({degree: i, name: n}) => planets
    .filter(({degree: j }) => ((i - j) > 82 && 98 > (i - j)) || ((i - j) > 262 && 278 > (i - j)))
    .map(({ degree: j, name: m }) => [{planet: n, degree: i, color:'red'}, {planet: m, degree: j, color:'red'}])
).flat()

const find_trigons = (planets:iMappedPlanet[]) => planets.map(({degree: i, name: n}) => planets
    .filter(({degree: j }) => ((i - j) > 114 && 126 > (i - j)) || ((i - j) > 234 && 246 > (i - j)))
    .map(({ degree: j, name: m }) => [{planet: n, degree: i, color:'green'}, {planet: m, degree: j, color:'green'}])
).flat()

const find_quintiles = (planets:iMappedPlanet[]) => planets.map(({degree: i, name: n}) => planets
    .filter(({degree: j }) => ((i - j) > 147 && 153 > (i - j)) || ((i - j) > 207 && 213 > (i - j)))
    .map(({ degree: j, name: m }) => [{planet: n, degree: i, color:'blue'}, {planet: m, degree: j, color:'blue'}])
).flat()

const find_oppositions = (planets:iMappedPlanet[]) => planets.map(({degree: i, name: n}) => planets
    .filter(({degree: j }) => (i - j) > 170 && 190 > (i - j))
    .map(({ degree: j, name: m }) => [{planet: n, degree: i, color:'#FF0090'}, {planet: m, degree: j, color:'#FF0090'}])
).flat()

interface iAspect { planet:Planet, degree:number, color:string}
const get_all_aspects = (planets:iMappedPlanet[]) => [ ...find_conjunctions(planets), ...find_semi_sextils(planets), 
  ...find_sextils(planets), ...find_cuadratures(planets), ...find_trigons(planets), ...find_quintiles(planets),
  ...find_oppositions(planets).reduce((d, i, idx, l) => idx < l.length - 1 ? [...d, i] : d, [] as iAspect[][])
]

const get_x_coord = ({degree}:{degree:number}) => x_center + Math.cos((degree + 96) *Math.PI/180)*radius 
const get_y_coord = ({degree}:{degree:number}) => y_center + Math.sin((degree + 186) *Math.PI/180)*radius
const get_origin = ({degree, color}:{degree:number, color:string}) => ({ x: get_x_coord({degree}), y: get_y_coord({degree}), color })

type DrawAspect = [{x:number, y:number, color:string}, {x:number, y:number}]
const get_aspect_coords = (aspect:iAspect[]):DrawAspect => aspect.map(({ degree, color }) => get_origin({ degree, color })) as DrawAspect

const map_planets =(planets:iPlanet[], asc:number):iMappedPlanet[] => planets.map(({name, house, degrees, text}) => {
    return ({ 
        house: house,
        text: text,
        degree: 180 + asc - ((house -1)*30 + degrees), 
        name: name,
        path: `planets/${name}`,
        color: deep_colors[(house + 3) % 4] as DeepColor
    })
})

const dynamic_x_coord = ({degree, r}:{degree:number, r:number}) => x_center + Math.cos((degree)* Math.PI/180)*r
const dynamic_y_coord = ({degree, r }:{degree:number, r:number}) => y_center + Math.sin((degree)* Math.PI/180)*r

const get_dynamic_coords = ({degree, color}:{degree:number, color:string}, r:number) => ({ 
    x: dynamic_x_coord({degree, r:r}), 
    y: dynamic_y_coord({degree, r:r}), color 
})

const are_planets_close = (planets:iMappedPlanet[]) => !!planets.find(({ degree }) => 
    planets.find(({ degree: deg }) => degree - deg < 9 && degree - deg > 0)
)


export const MiniChart = ({ planets, houses, drawHouses=true }: iAstralChart) => {

    useEffect(() => { 
        const draw_circle = (svg:SVG, r:number) => svg
            .append('circle')
            .style('stroke', '#ADD8E6')
            .style('fill', 'rgb(256,256,256)')
            .attr('r', r)
            .attr('cx', 150)
            .attr('cy', 150)

        const new_arc = (startAngle:number, endAngle:number, innerRadius:number, outerRadius:number):Arc<any, DefaultArcObject> => arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .startAngle(startAngle * (Math.PI/180))
            .endAngle((endAngle || startAngle)* (Math.PI/180))

        interface iArcProps {startAngle:number, endAngle:number, innerRadius:number, outerRadius:number, fill:string}
        const draw_arc = (svg:SVG, {startAngle, endAngle, innerRadius, outerRadius, fill}:iArcProps ) => svg
            .append('path')
            .attr('d', new_arc(startAngle, endAngle, innerRadius, outerRadius) as ValueFn<SVGPathElement, unknown, string | number | boolean | null>)
            .attr('transform', 'translate(150,150)')
            .style('stroke', '#ADD8E6')
            .style('fill', fill || 'rgba(0,0,0,0)')

        const create_text = (svg:SVG, {x, y}:{x:number, y:number}, text:number, color:string) => svg
            .append('text')
            .text(text)
            .attr(
                'transform', 
                `translate(
                    ${ x > 150 ? text !== 6 && text !== 7 ? x : text === 7 ? x - 2 : x - 2 : text !== 1 ? x - 4 : x - 2}, 
                    ${ y > 150 ? text !== 3 && text !== 4 ? y : y + 1 : text !== 9 && text !== 10 && text !== 11 ? y + 5 : y + 3 }
                )`
            )
            .attr('font-size', '12px')
            .style('fill', color)

        const draw_image = (svg:SVG, { x, y }:{x:number, y:number}, path:string, idx:HouseNumber, size:number=15) => svg
            .append('image')
            .attr('xlink:href', path)
            .attr('width', size)
            .attr('height', size)
            .attr('x', get_x(idx, x))
            .attr('y', get_y(idx, y))

        const draw_line = (svg:SVG, {x1, y1, x2, y2}:{x1:number, y1:number, x2:number, y2:number}, color:string) =>  svg
            .append('line')
            .style('stroke', color) 
            .attr('x1', x1)
            .attr('y1', y1)
            .attr('x2', x2)
            .attr('y2', y2)

        const draw_aspect = (svg:SVG, [{x:x1, y:y1, color}, {x:x2, y:y2}]:DrawAspect) => draw_line(svg, {x1: x1, x2: x2, y1: y1, y2: y2}, color)

        interface iRotatedText { text:string, color:string, rotation:number, pixels:string}
        const rotated_text = (svg:SVG, {x, y}:{x:number, y:number}, {text, color, rotation, pixels}:iRotatedText) => svg
            .append('text')
            .text(text)
            .attr('transform', `translate(${ x }, ${ y }) rotate(${rotation})`)
            .style('fill', color)
            .style('font-size', pixels)

        const draw_planet =(svg:SVG, planet:iMappedPlanet) => { 
            const { x, y } = get_dynamic_coords({degree: planet.degree, color:''}, 85)
            draw_image(svg, {x: x, y: y}, `${planet.path}_${get_element(planet.color)}.png`, 12, 18)

            rotated_text(
                svg, 
                {x: x+13+(x-250)/75*(planet.text.split(' ')[0].length < 3 ? 16 : 26), y: y+7+(y-150)/75*26}, 
                {text:planet.text.split(' ')[0], color: planet.color, rotation:355, pixels:'16px'}
            )


        }

        const ward_off_planets = (svg:SVG, planets:iMappedPlanet[]):void[] => are_planets_close(planets)
            ?   ward_off_planets(
                        svg, 
                        planets.map(planet => 
                            planets.find(({ degree }) => Math.abs(planet.degree - degree) < 9 && 0 < Math.abs(planet.degree -degree))
                            ?   planets.find(({ degree }) => planet.degree - degree < 9 && 0 < planet.degree -degree)
                                ?   {...planet, degree: planet.degree + 1} 
                                :   {...planet, degree: planet.degree - 1}
                            :   planet
                        )
                    )
            :  planets.map(planet => draw_planet(svg, planet))

        const draw_chart = (planets:iMappedPlanet[], houses:number[]) => {
            const lastSVG = select('#viz')
            lastSVG.selectAll('*').remove()

            const svg = select('#viz').append('svg').attr('id', '#AstralChart').attr('width', 300).attr('height', 300)
            circles.map(r => draw_circle(svg, r))

            const asc = houses[0]
            const signs:number[] = [...new Array(12)].map((_, i) => (i * 30) + 270 + (asc % 30))
            signs.map((d, i) => draw_arc(svg, {startAngle: d, endAngle: signs[i+1], innerRadius: 130, outerRadius: 150, fill:'' }))

            // ['yellow', 'red', 'green', 'blue']
            signs.map((d, i) => draw_arc(svg, {
                startAngle: d, 
                endAngle: signs[i+1] ? signs[i+1] : signs[0] + 360, 
                innerRadius: 135, 
                outerRadius: 149,
                fill: colors.reduce((d, i) => [i, ...d], [] as Color[])[(16 + Math.ceil(asc/30) - i) % 4]
            }))

            signs.map((_, i) => 
                draw_image(
                    svg, 
                    get_new_arc_middle({ 
                        grade_one: signs[0] + i*30, 
                        grade_two: signs[1] + i*30, 
                        depth: 137
                    }), 
                    sign_imgs[(12 - Math.ceil(asc/30) -1 + i) % 12], 
                    i as HouseNumber
                )
            )

            const chartHouses = [
                ...houses.reduce((d, i, idx, l) => {
                    const delta = 270 + l[0] - i
                    return [...d, i >= l[0] ? delta : delta - 360 ]
                }, [] as number[]),
                -90
            ]

            chartHouses.filter((_, i) => i < 12).map((d, i) => {
                const arc = {startAngle: d, endAngle: chartHouses[i+1], innerRadius: 52, outerRadius: 60, fill: house_colors[(15-i) % 4]}

                if(drawHouses) draw_arc(svg, arc)
                else return draw_arc(svg, arc)

                const { x, y } = get_arc_middle({grade_one: d, grade_two: chartHouses[i + 1], depth: 55})
                create_text(svg, { x, y}, i + 1, deep_colors[(i+4)%4])

                return draw_arc(svg, {startAngle: d, endAngle: chartHouses[i+1], innerRadius: 50, outerRadius: 130, fill:''})
            })

            const aspects = get_all_aspects(planets)
            aspects.map(aspect => draw_aspect(svg, get_aspect_coords(aspect)))
            ward_off_planets(svg, planets)
        }

        const mappedPlanets = map_planets(planets, houses[0])
        draw_chart(mappedPlanets, [...houses])
    }, [planets, houses, drawHouses])


    return <div className='App' style={{margin:'50px 25px'}}>
        <div id='viz'/>
    </div>
}
