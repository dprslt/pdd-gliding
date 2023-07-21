'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

import pageStyle from '../../balises.module.scss';

type MesuresOPGCProps = {};

const widthMeteo = 250;
const heightMeteo = 220;
const widthDate = 220;
const heightDate = 50;

const urlOPGCPdd = 'https://wwwobs.univ-bpclermont.fr/observ/chimie/PDD.jpeg';

const MesuresOPGC: React.FC<MesuresOPGCProps> = () => {
    const [imgDate, setImgDate] = useState<string | undefined>(undefined);
    const [croppedUrlMeteo, setCroppedUrl] = useState<string | undefined>(
        undefined
    );

    /**
     * This code will load an image proxied through the backend and crop it to extract informations
     * We will get basic metorological informations and datetime to be able to validate data quickly
     */
    useEffect(() => {
        const canvasMeteo = document.createElement('canvas');
        canvasMeteo.width = widthMeteo;
        canvasMeteo.height = heightMeteo;
        const ctxMeteo = canvasMeteo.getContext('2d');

        const canvasDate = document.createElement('canvas');
        canvasDate.width = widthDate;
        canvasDate.height = heightDate;
        const ctxDate = canvasDate.getContext('2d');

        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target && ctxMeteo && ctxDate) {
                var img = new Image();
                img.onload = function () {
                    ctxMeteo.drawImage(
                        img,
                        325,
                        160,
                        widthMeteo,
                        heightMeteo,
                        0,
                        0,
                        widthMeteo,
                        heightMeteo
                    );
                    setCroppedUrl(canvasMeteo.toDataURL('image/png', 100));
                    ctxDate.drawImage(
                        img,
                        255,
                        55,
                        widthDate,
                        heightDate,
                        0,
                        0,
                        widthDate,
                        heightDate
                    );
                    setImgDate(canvasDate.toDataURL('image/png', 80));
                };
                if (e.target.result) {
                    img.src = e.target.result as string;
                } else {
                    console.error('invalid payload');
                }
            }
        };
        var request = new XMLHttpRequest();
        request.open('GET', '/opgc-proxy', true);
        request.responseType = 'blob';
        request.onload = function () {
            reader.readAsDataURL(request.response);
        };
        request.send();
    }, []);

    return (
        <div className={pageStyle['opgc-container']}>
            {imgDate && (
                <img
                    src={imgDate}
                    alt={'Date OPGC'}
                    style={{
                        borderRadius: '1em',
                    }}
                    width={widthDate}
                    height={heightDate}
                />
            )}
            <a
                target="_blank"
                href={urlOPGCPdd}
                rel="noreferrer"
                title="Balise OPGC"
            >
                <img
                    src={croppedUrlMeteo || urlOPGCPdd}
                    alt={'Balise OPGC'}
                    style={{
                        borderRadius: '1em',
                    }}
                    width={widthMeteo}
                    height={heightMeteo}
                />
            </a>
        </div>
    );
};

export default MesuresOPGC;
