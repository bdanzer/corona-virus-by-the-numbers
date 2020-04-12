import React, { Component } from "react";

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
<url><loc>https://coronavirusbythenumbers.com/404</loc>
                
            
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/afghanistan</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/albania</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/algeria</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/andorra</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/angola</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/antigua-and-barbuda</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/argentina</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/armenia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/australia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/austria</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/azerbaijan</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/bahamas</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/bahrain</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/bangladesh</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/barbados</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/belarus</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/belgium</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/benin</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/bermuda</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/bhutan</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/bolivia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/bosnia-and-herzegovina</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/brazil</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/brunei</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/bulgaria</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/burkina-faso</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/cambodia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/cameroon</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/canada</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/cape-verde</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/cayman-islands</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/central-african-republic</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/chad</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/chile</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/china</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/colombia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/congo</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/costa-rica</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/cote-d'ivoire</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/croatia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/cuba</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/cyprus</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/czech-republic</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/democratic-republic-of-congo</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/denmark</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/djibouti</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/dominican-republic</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/ecuador</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/egypt</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/el-salvador</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/equatorial-guinea</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/eritrea</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/estonia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/ethiopia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/faeroe-islands</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/fiji</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/finland</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/france</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/french-polynesia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/gabon</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/gambia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/georgia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/germany</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/ghana</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/gibraltar</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/greece</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/greenland</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/guam</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/guatemala</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/guernsey</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/guinea</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/guyana</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/haiti</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/honduras</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/hungary</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/iceland</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/index</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/india</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/indonesia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/international</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/iran</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/iraq</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/ireland</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/isle-of-man</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/israel</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/italy</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/jamaica</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/japan</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/jersey</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/jordan</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/kazakhstan</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/kenya</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/kosovo</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/kuwait</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/kyrgyzstan</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/latvia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/lebanon</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/liberia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/liechtenstein</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/lithuania</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/luxembourg</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/macedonia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/madagascar</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/malaysia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/maldives</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/malta</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/mauritania</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/mauritius</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/mexico</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/moldova</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/monaco</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/mongolia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/montenegro</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/montserrat</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/morocco</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/myanmar</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/namibia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/nepal</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/netherlands-antilles</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/netherlands</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/new-caledonia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/new-zealand</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/nicaragua</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/niger</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/nigeria</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/norway</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/oman</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/pakistan</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/palestine</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/panama</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/papua-new-guinea</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/paraguay</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/peru</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/philippines</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/poland</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/portugal</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/qatar</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/romania</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/russia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/rwanda</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/saint-lucia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/saint-vincent-and-the-grenadines</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/san-marino</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/saudi-arabia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/senegal</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/serbia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/seychelles</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/singapore</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/slovakia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/slovenia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/somalia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/south-africa</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/south-korea</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/spain</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/sri-lanka</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/sudan</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/suriname</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/swaziland</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/sweden</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/switzerland</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/taiwan</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/tanzania</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/thailand</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/timor</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/togo</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/trinidad-and-tobago</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/tunisia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/turkey</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/uganda</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/ukraine</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/united-arab-emirates</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/united-kingdom</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/united-states</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/uruguay</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/uzbekistan</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/vatican</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/venezuela</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/vietnam</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/world</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/zambia</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url><url><loc>https://coronavirusbythenumbers.com/zimbabwe</loc>
                
                
                
                <lastmod>2020-03-22</lastmod>
                </url></urlset>`;
export default class Sitemap extends React.Component {
    static async getInitialProps({ res }) {
        // const fs = await require("fs");
        // const path = await require("path");

        // let sitemapPath = path.resolve(__dirname + "/../testing/sitemap.xml");

        // let sitemap = fs.readFileSync(sitemapPath, {
        //     encoding: "utf-8"
        // });

        // console.log(sitemapPath);

        res.setHeader("Content-Type", "text/xml");
        res.write(xml);
        res.end();
    }
}