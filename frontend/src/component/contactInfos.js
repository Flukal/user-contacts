import React from 'react'
import { ExternalLink } from 'react-external-link';

export default function contactInfos({ contact, isBoxVisible }) {
    return (
        <div key={contact.id} className={`contacts__infos ${isBoxVisible ? "contacts__infos--show" : ""}`}>
            <p><b>Age:</b> {contact.age}</p>
            <p><b>Phone:</b> {contact.phone}</p>
            <p><b>Email:</b> {contact.email}</p>
            <p><b>Site:</b> <ExternalLink href={contact.site}>{contact.site}</ExternalLink></p>
            <p><b>Tags:</b> {contact.tags}</p>
        </div>
    )
}
