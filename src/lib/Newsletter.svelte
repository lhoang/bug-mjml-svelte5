<script lang="ts">
    export let title: string
</script>

<mj-section>
    <mj-column>
        <mj-text font-family="Helvetica" color="#F45E43">
            <h1>{title}</h1>
        </mj-text>
    </mj-column>
    <mj-column>
        <mj-table>
            <tr style="border-bottom:1px solid #ecedee;text-align:left;padding:15px 0;">
                <th style="padding: 0 15px 0 0;">Year</th>
                <th style="padding: 0 15px;">Language</th>
                <th style="padding: 0 0 0 15px;">Inspired from</th>
            </tr>
            <tr>
                <td style="padding: 0 15px 0 0;">1995</td>
                <td style="padding: 0 15px;">PHP</td>
                <td style="padding: 0 0 0 15px;">C, Shell Unix</td>
            </tr>
            <tr>
                <td style="padding: 0 15px 0 0;">1995</td>
                <td style="padding: 0 15px;">JavaScript</td>
                <td style="padding: 0 0 0 15px;">Scheme, Self</td>
            </tr>
        </mj-table>
    </mj-column>
</mj-section>

