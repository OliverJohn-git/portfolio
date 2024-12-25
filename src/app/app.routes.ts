import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PortfolioPartsComponent } from './portfolio-parts/portfolio-parts.component';

export const routes: Routes = [
    { path: '', component: PortfolioPartsComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent }
];