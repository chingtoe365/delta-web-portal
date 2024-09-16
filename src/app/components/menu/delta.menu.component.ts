import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { MegaMenuItem } from 'primeng/api/megamenuitem';
import { MegaMenuModule } from 'primeng/megamenu';

@Component({
  selector: 'app-delta-menu',
  standalone: true,
  templateUrl: './delta.menu.component.html',
  styleUrl: './delta.menu.component.css',
    // selector: 'menubar-template-demo',
    // templateUrl: './menubar-template-demo.html',
    // standalone: true,
  imports: [
    MenubarModule, 
    BadgeModule, 
    AvatarModule, 
    InputTextModule, 
    RippleModule, 
    CommonModule,
    MegaMenuModule
  ]
})
export class DeltaMenuComponent implements OnInit {
    items: MegaMenuItem[] | undefined;

    ngOnInit() {
        this.items = [
              {
                  label: 'Forex',
                  icon: 'pi pi-dollar',
                  items: [
                      [
                          {
                              label: 'Major',
                              items: [{ label: 'GBP/USD' }, { label: 'USD/JPY' }, { label: 'AUD/USD' }, { label: 'EUR/USD' }, { label: 'CAD/USD' }]
                          }
                      ],
                      [
                          {
                              label: 'Minor',
                              items: [{ label: 'USD/CNY' }]
                          }
                      ],
                  ]
              },
              {
                  label: 'Commodities',
                  icon: 'pi pi-warehouse',
                  items: [
                      [
                          {
                              label: 'Agriculture',
                              items: [{ label: 'Wheat' }, { label: 'Lumber' }, { label: 'Coffee' }, { label: 'Sugar' }, { label: 'Cocoa' }, { label: 'Cotton' }]
                          }
                      ],
                      [
                          {
                              label: 'Metal',
                              items: [{ label: 'Gold' }, { label: 'Silver' }, { label: 'Copper' }]
                          }
                      ],
                      [
                          {
                              label: 'Energy',
                              items: [{ label: 'Oil' }, { label: 'Natural gas' }, { label: 'Coal' }]
                          }
                      ]
                  ]
              },
              {
                  label: 'Index',
                  icon: 'pi pi-wallet',
                  items: [
                      [
                          {
                              label: 'North America',
                              items: [{ label: 'USA500' }, { label: 'US30' }, { label: 'US100' },]
                          }
                      ],
                      [
                          {
                              label: 'Europe',
                              items: [{ label: 'FTSE100' }, { label: 'DAX' }, { label: 'FR40' }, { label: 'IT40' }]
                          }
                      ],
                      [
                          {
                              label: 'Asia',
                              items: [{ label: 'Nikeii225' }, { label: 'HK50' }, { label: 'ASX200' }, { label: 'SENSEX' }]
                          }
                      ],
                  ]
              },
              {
                label: 'Stock',
                icon: 'pi pi-wave-pulse',
                items: [
                    [
                        {
                            label: 'USA',
                            items: [{ label: 'Apple' }, { label: 'Microsoft' }, { label: 'Nvidia' },]
                        }
                    ],
                    [
                        {
                            label: 'Europe',
                            items: [{ label: 'Volkswagen' }, { label: 'Shell' }, { label: 'Uniper' }, { label: 'TotalEnergies' }]
                        }
                    ],
                    [
                        {
                            label: 'Asia',
                            items: [{ label: 'Saudi Aramco' }, { label: 'TSMC' }, { label: 'Samsung Electronics' }, { label: 'Tencent' }]
                        }
                    ],
                ]
              }
          ]
      }
}
