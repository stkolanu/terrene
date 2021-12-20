import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import type {HistoricSiteType} from 'terrene-types';
import debug from 'debug';
import {ContentWrapper} from '../Layout';
import {server} from '../server';

const d = debug('web.src.app.historicSite');

export function HistoricSite() {
	const {slug} = useParams<{slug: string}>();
	const [historicSiteInfo, setHistoricSiteInfo] = useState<HistoricSiteType>();

	useEffect(() => {
		server.fetch('historic-site', {slug}).then(data => setHistoricSiteInfo(data));
	}, [slug]);

	if (!historicSiteInfo) return <div>Loading...</div>;

	return <ContentWrapper title={historicSiteInfo.name} content={historicSiteInfo.content} attribution={historicSiteInfo.attribution} />;
}
