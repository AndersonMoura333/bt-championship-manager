import Guest from "../layouts/Guest";
import UserChampionships from "../components/UserChampionship";
import UserMatches from "../components/UserMatches";

export default function UserProfile() {
  return (
    <Guest>
      <div className="bg-[#F7BC6D] min-h-screen flex flex-row items-center justify-center	">
        <div className="grid w-3/4 grid-cols-4 gap-4 p-4 mt-4 bg-white rounded-md">
          <div className="flex flex-col items-center mt-4">
            <p className="mb-4 text-3xl font-semibold">Meu Perfil</p>
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhMVFRUVFRUVFhcVFRUVFhUXFRUXFxUVFhcYHSggGBolGxUXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGC0dHR0tLS0rLSstKy0rLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tKy0tLS0rLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBQYEB//EAD8QAAEDAgMFBQYDBwQCAwAAAAEAAhEDIQQSMQVBUWFxBiKBkaETMrHB0fAHUnIUIzNCYuHxFSRzspKiQ1OC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAMBEAAgIBAwMCBAUFAQEAAAAAAAECEQMSITEEE0EiURRhcYEFMpGhwUKx0eHw8WL/2gAMAwEAAhEDEQA/APUEJELcxFQlSIAVIhCAFQhIkAJUiEAKkQhACoSJUACEIQAIQhAAhCEACVCEAKkQhAwSpE5AAhCEACEIQBxOxPJOFc/lPp9VEB3z4LoAWLm7ZaiqGiufyn0+qHYiNRHUgfNS5Vn+2dCaIdPuuFuM2WmJOeSMLq3XFmWeXbxymldKy9bVnQfD6qN2MYLFzQRuLh9Vy9njOHp/pCyGNwrBiXtqvIbmJLokyb6dStOnxvLKUXJrTfCtunWyMOo6jtwhJRT1Vy6q1fJusNjGVJyOa6NYMwnis0mMwnhIlVHZqnSDXeyeXCbkiLwLacFlq4dSxDy2S6m4mehuTyun0+J58k4JuOnjUqb4W68bv9yc3VdrHCco3q5p3+nNnoLqoBgkTwm6fKxOOxja2IoVG7xTkcCHmQrLtXjHgMpMMZxJjfuAR8Pk1wx3vJN7qqp0/wDI/i4aZzraLS+trb+5etxlMnLnbPDMJ8pU0rKHssfZyHkuAnQZSeA3+Ksuy+Mc5hY8yW6GZMcD5LN9uWN5MM9STp2tPPDV8p+5WPNPWoZYaW+N7+31LmUypWa33iB1MKSFne2FNsU3OJjvAAAakTPolhi8mSMLq9uLNs81ixuaV19i9ZiGnRzT0IUjnxcwBxNlg6mEogU/Y1HOqGO6LkGN0ARdaja9MuwrsxiGgu55YkW5qskFGUFqfqvmLi1TSbp+N9n58GOLqHOM24r0q9nae11f9/YsRiGnRzT4hPzLC4TZDH0XVc+UtzcIMAHXnK0XZXEufSIcScroBN7QDE79VWbEoKTjPVplpdqt37e5PT9S8koxnDTqVre//C2NccR5hNo4pj/dc10awQY8lhq+CacQ9tSplGZxLo36xC0vZzDU2NOR+e9zEbhb74qepx9mEXqbcq/paW/vLj7cj6fqHlyOOlJK/wCrfb5f8vmXDqkXMAc0jK7ToQehBWPxBqYyu5uaGNJgbgAYmN5Kkw+CoYatL6xzNGkERI35dbbkZI6E46m8lXpjFy54TfCv9luEeqcnaitF1qcq+tJ8/wAmuzJntxxHmmCsH0y5rrFpIdHLWF55RwLnU31AbMgHiZOvw81XT4u7eqemmlxe8nSXjyPqup7OnTDVab58I9J9pyTTW5Li2FiPaUGE6xB6ix+C74XM3NNp8q1+mx1QcZRUlw9yI4g/l9VHUxbtzPMroITKjbKXKXuaJIg/bz+Q+YSLgv8AcIRrfuFIs473gpgo96mCuX5mTHgFVdqKZOGdAky3T9QVqlIThNwkpJW1v+hOSGuDj7pozfZXGvIFIshrW+8ZkybD19FX7YDmYt7xTzi1i0lplgC2baYQaYKqHUTjOeTtx9W2nU635d1dtnLLpHLFHG57xdp0vHG3BUdncQXhxNIU7wABE2uYjoqyhR/31QEWdmBtYgtErVtYAg0xqsYynCGRQgl3E1Wp7XXlpttV59+TR4NSgnK3B3dLfn/JhcVs11HENaAS3M0tPLMPgr7tJsx1VrXs95g04jW3MFXr2ApQF0z6vNPLHJSTgqT5vjlf7ModBjjGcP6Zu/p9DHu2/iC32fs+/GWYdm/8eKs+zWzjSBLvedu4AaDrcq6NIJzRCyyZpzj24wjjjdum23XC3SpX4/2Vi6Vxmpzm5tbK6VfoKs520aTTpwCbnTotEkc0HVPHllimskVbjvTdX9zbPi7uOULqzA43F+1axjKJDmx3gLmBFoHitTjc37G4O94U4PWBKsfYj7KVzmiyl5pvSo41CMG3WqUm23fLVpGOPpXFycp6nJVwlVfJHnw2efYe2G55a4cBaCtl2dyGi0sEDQjeHb5Vi2mPNDKYCvP1ebqNKyR4k5fme18KqWqvDfBPTdFHp5aovwk9vbz8r9jD4ysGYmo5zA8ZnWPx0Wl7P1mvYS2mGCTAG/SToPsKzNIIYwDRRnyyzOCljS01vrk9l/8ANJb+/KLwdK8U3LVaduqXn58mTr06mDrOe1uZjiTygmYPAjiuTFF2LeMlINky52vLvOtbkty5oOqY2kAtvi8qkpKEXNKlJuS+SuK2dGUuhTuOtqDd6aX7PwU+1z7DCFo3gMHiYJ8gVRYHCYk0S1gGSoCTOWT89y272A6oawBY482XFj7UYxe9uUt7f02p3vd/Y1y9KsmTW5NJKklt9d/4ozfY2sYfTO45h42PwWlTBSAunyieSWXJKcoqNvhO/wCEbYMXaxqF3QJjgnqN5UM1KSRxQufNzQiijQDVShQ71KFpP8xnHgVOTU5IoVCEBAhUiRCAFQlSIACojVC4tq7QawFuYAxJ5C31Cx+J7U+za8NIJjUXuZ38lDe+xajaNVidv0mOLXE2HB2pi2kDUeapqnag5XuAEM1BIDtSBETOiwW0tuvqRoIMiABcaKpxGOc7fHIaWTULBtI9Fb28iMw13jVvh5eap2drntqOOYlpdIBAOuvw9VivaklKKhV6ETqZ6tge2INiRNrGZF4MHf0Whwm3KNRsh0iYJg2PPgvCm1SrTZu2qtL3XQN+mnC6lwrgaafKPcadUOEtII4i6kCwHZ3tHPvERAkwBfpPLWy3GFrh7QRB6JJ+GDVfQ6EJEKiQSpEIARBTk1AwKhrGAeilUGJPdd0PwUSGjNeaFJlQnQjRHVSBQlTBXPkiHAoTgmAp6RYqEkpUCBCalQAq4dr4z2VMu36Ac4n5LtVL2sxLKeHcXmBFuObcBxKT4HHkwm3dr+1Ptbw5sEaZXAkffVZKvX1hPrY1xzAWa4zGvT4rmpUy7db7smlRbd7Ia50pwwjiJ3K3wOx3OIkQPVaTDbLG9o6wssmeMTWHTt7vYxR2a4CSFzvoEarf4vZwgTccPh1VfU2Q0uFrR566KIdT7lS6ZeGY2EAq+xux40iPgqevQI+/guiORS4OeeKUeSfB4x1MgtIkXuAR5FbTsh2pe1xbUgsgaQIv8p+93nwcu3A1g1wPP73pyRKfg9+o1A5ocNCJCeqbspjRVw7I1YAw+AsfEK3UoKHISITECEiVIY0rmxx7jv0u+C6CuPaR/dv/AEn4KGNFd7NC6siFrQjscpAo3p7Snk5REOCVqcE0JyhFAhCEwEQlQgAXnP4o18zqbAfcBcROpdpA3mB6r0VYj8Rdk5m/tGXMGtyv/MBPdcJ1ubj6JFR5PK3TK1mx9nhrQ4jQaxv3lUGzKOeq0c1uWZWi5Ajnoseok1sjr6aK/MGGZGqsKbQufCYmi6zXtJ5ESFZNY2y4qZvKRzVRyXM6lOvorGs5rRJuqGvtaqXQKEt5G6ai2JS2Fq0tx9VS7TwF8wHI8gririiRdpHKLqFlUPHMahXFuLtFSSkqZh69OHFNY5WG3MMWOncdFWM1Xoxlas8yUdMmj1L8LMYCyrSM5pDxwywGnyPxW8WL/DnY/sqXtne9VAi4gN1HmtpKm9xUCEIQAIQgoAa5cG1P4T/0ld5XDtf+E/p8ws2VESEKSELeiCV6exMcnUyjJ4JgShKkCVSUCVIhACoSIQAKm7VPaMLVz+6WkeJ09YVuVWbfo56FRkA5mkGdOqiRUeTyPYIh73xOVluriI+as24Zrj+9c478rbeZ3JvZ7C5W1Zic4ba/uj+6krbPzOOckgzaO7e0m6xyT9b3O/FH0cElNtJv8Ox6h3qNFa7MxhdY7lWYTZzKbSADfLJLpPdnLBPugTuXTs+mQSfFc82nvdmyW252bTrXibKoq7SLXQ0Gw3CT62VhXp5tUjMIJkn0CmLXkGtipHaIO3EiBOZoGv8AU3Q9QV1U3h0OHwjw5qzqYdpABcDyDQom0A0d0W4K5Tj4REU/Lsqtu4TPSPFtx4a+ixhC39YWIWSw+yalV7msbMEzuAjmunBLZ2c3UQtpo2f4X7SeXOokktAzNG4XAO7mvSl592IwLaNSRZzhkdz0PxAXoAVqak7Rhkg4OmKhCFZAIQhACOVftk/uneHxC7nKt22f3R6t/wCwWbKR0whKhdNGW4rktJDktNLJ4CBME5NCVZlioQhMQIQmkoACuXGtljgOB+C6ionrORSMBhqLWAwIl0+gClbSlGIblc9vB7h629FLSqADmVwSu9z1U/KGYqllbz3BNwlIxbeuLazqgBeHAddyqsF2idIYbmYzNj5pxxuStClJR5ZfVS8H3V00KjHiCMp39Vm3bSJMmvBJgNbEDhmJBlW2zacg5nhznbxuhDg1yFpotRhCLhcmJfFlPQrubIK4sdVklRt4BXZy1ijDPyuDgY1nnMKGq9Ow7ZIAMHj4LRcDovdigftAA/M0+IbJ+C2oWD2G4/tdNoghrXudvN7A9dVugujCqj9Th6l3P6DgnJqFsc45CRCdgMcqzbv8Pq5o9VZlVe3D3G/8jFPkpHbCE5C6KMrEckYbp7kxuqWXgUOScJwSBOCzRoQYrGsp5c5jMYEAknjYbuaKeNpudkDwXROXfA1WN2k+s85Q+TALjMF2a4Fv5QLAaaqDBe2puEk5Wls3nLmMBzJ3g8OhXqx/D4uFuW//AHy/Y8qX4hJTrR6T0BIoMA97qbTUjMReNNbHyU68yS0tr2PUi7Vg5RvUhUTis2UjGbew72vc50EOdLSOFrHmFU4jF+yYXuvlFgtht/D56ZjUXHzHkvONtvLqUC8G8LllD1r5nfjyeh/IoNpbVqV3d51twGidg6LJ72aBewd4XXRsbAB5M6jS1loKLHtsKZd0hbTyKPpRGLE5+qTMpi6Ee7mIHEGeuiRmNqM91xt1Wzph7hAou8gUHYuZrszcsjgCfFR31w0VLp0t4yOLszt81X+zqG5HdPy8leY4ALK0NjmlWBEwDOb6RzVtjMZpKyyqLknHyXhUq9XgjquVZtzEltMQSCXDQxYA/wBlJUxMnVUe0sXnfA0bYczvP3wWuODvcjNlSi0j0T8MMM4h9V8zIidCCBfmbfcr0EFZ7sNRLMFRDpmCYNoBcSAtAFt5OJj0JEqCQQUqEAMcqjbelP8A5G/NWzlUbbN6X/IPv1S8lIskJULqMRXJrQlcmsN0p8BHknanQmBOWRoZnbewAcvs2ui4Ed7LvykE+7cwdRpe0cOzuz7xUAdNu8DlOQRoSTE/pGvFbVC7ofiGWMNBwz/D8Up6yLCUPZsayS7KIkxJ8lKhIuFu3bO1JJUhCmOSVqrWiXENHFxAHmVTbR7VYSkDNUPIMFtOHnzmB4lQy4ps764XmfatzaOJIYRJAc5v5Sd3zjmrbaP4gg2oUuPeedLbg36rz7amJc9+dxlxJJO+TqhQvk2TcVZptnbQZMRB4fTir2lVbOtisC1zgASJG48F04bFPHuvEcCsZ4U90zaGbwz0GjVaBYieqhxu0AAb6rGMfWOhaPFQ4gu/nqTyH1WaxeLL1rmmd+M2uJIF+nFVFbFuJTS+bNELpobOJu6w4kX8At1GMEZXObpHP7WBP2TuVr2H2VhqtcCu85rOpsNmvO8E7zbS0qn2gRmDW6D1PFMaYI5R6LRbozlFXR77SbAUwXmWxe3dSi0NrtNVrbFw/iRu1s7x81q9i9scNiIEmm9zsrWv1dYEQRblc6qaM3Fo0YSpmYTG/hvT0EUKmpUhTENKqNsHv0f1/RW5VNtg/vaI/qn1ClcostUichdhgBTWm6Vya3UJT/KwjyTAp4KYE4LBM0HJlWoGgucQABJJMADiSo8ViWU2F73BrWiSTuXk3a/tS7FOytJbRBs2YLv6nff1QUotmw2x27pUzlot9ofzE5W+A1Posjje3eLf7r8gn+RrfQ3PqsqahnhPAfNMBnf5/JOjX0rhHdjNpVapJqvc/f3nF143A8FzPf8AJR06fHkBqh43dT/jjogveiRg7p5x9+iiqPaePVOxTw0QNdfFc1B246bjwTIltsX2yR3bX3EHRT19mMNwCw8tEzYLAWcwYV/QXDkyOM3R2wgpQV7mb/018wHjzj0U1HZLZ7755N+p+i07cO07gpPYAcApeeQu1CynpYQM9ynH9TtfM38k2u0AEuMxfkPqrWqwcVnu0eNDG5Bq7XkFMG5Sot1CLfgzb3lzi7x8FIKwI1BUAqQIF+Zn0TBT4GCvSo822d+cQIjSTrzFvL1SZ9b7+i5m1yBBEjj/AGUzHgknXfwulReqyw2ZtmtQealOoQ4iCbGQYt3pG4blp8B+IGJa6KgZUbpcBjust+iw9U39FI03MxrHhf0Q0h88nqGA/EWg61am9hmJb328uB9FqNnbSo4huai8PG+NQeDmm4PVeEl0dZ5T/lSsxtSmQ5jnUyN7XFp9EtJMoo98KpNpOBr0RwJ+Sw2zO3mKpwKobWbz7r45OGviFqMJteliqtJ9MmNHAiC12sH00UVUkS0adCELrOYRybN0rlHKJ/lYLk6mqPEV202ue8w1oLieACcvPvxM23phWmBAdUM6k+4yR5nqFym8Y26KPtNt92LcXAkMmGNnQcSOJ4rN5SbnSdd/NOaQCCRPz+5Tyy0Dx5b1Z06b+xykaKWnEHkPCU2uwgxrPn92Sl0S2dG+sietyglKmH83QE6Hf6IN3WHKb7rJ2W8bpG/cOiZTbr0+aRXyI3Ngnjv5pDTtddNSG36rne7/AAmiHFIsdh4jLUIOjvjrHktOx4WMa6CDpEEeEH5Fa/CskAri6mO9nZ0z9Nex3sqiyV1QKBtArobRXKbbEVesACsDtGv7SqTukjwC1naTFezpHi7uj5nyWLYJ++K7ulhScjk6qd1EkDY+4S5UpNgeMn1Q1dRyCubz9E9jN3h8Pooz9U6m8QZI+figaoaDcqd4sbEzw3eUCYUU3UxbciZk8DwIiyGXFCZ7xfX5ymi2hmReSQZOh8gAkfd1ue9Rz/dMix7XGDN55z9/2W5/D6+W385/6hYIar0D8Pf5P1u+Cl+CXwejITULpMCIuTQVEaqRtS6JLZkJ7nRjcW2lTfUf7rGlx8AvC9pYl1Wo+q65eS53U7ukW8F6L+Je0iyg2i0/xTLuOVkH1MeS8z1B5LkjwdkVsOc6xM2Gn08oUuYiLTAm2l+KjpU5A3kk2M+KUO1M38Ocgx1TNlfI97Cb6GJAEaX0P+UBrQSACYF77+Hp6poqm1v7xofVLTmT0O6B93SKVXsIajieAjSwm3mdU2kY6Qio0ai5/wAT13JrTY3+saFMlunuK4SPNMqMgJrZUrKnHzTItMSnTDmzvaLCBe5mb6ea1uwq4dSEG7RBniFj4AI0j7lXHZuoM+T/AOwd39TTpG8kEjrCyzQ1R28GmKbjLfya1g5p9MZjAuT6qGng3AE1JaLASWgudBNuEAXsTpA3qSriwxjstmBveJgkkZsxk6DvGN9guLRXJ0ud8bmN7W15r5NzAOUlwBmPLVVNMXgcdeFkjsRnc9+9xJn1St1m9hxECy9GMdKSOFu3Y9zQSOg48bJWt/p3kaH6pj3kmAeCfUfEd7nKYWhti5wAjhY+MpQ4Qdd43cP8pjS48fElLUBA19UyRzY032mDIuYUsnN3TvkyTYCJA9FBScSRc7t6e6DJkb9LxGgCCkxTbyE/NMcYH3wVjR2NinNFRlGqWkAghjiCCJm3IykfsPFSf9vV3/8AxOOljuvFr80yWyrzL0L8PtGc3P8AmPksJi8DVokCpTfTLtM7XNnjGYc16F2Myg0g38kn9RbLvUpeUS+DdylUUoW5z2ZUdpKf5X+n1T6XaGkXAQ8SQLgbz1WXTIXD8VM7fhYHN26xxq4pw3U/3Y//AD73/sSs8x0eK01Zrne85x6lcrtns3yUlmjXBXbZWscAIm4AIH3zUZdqLX8NNByVucCzgU0bPZukeKfeiVpkVD5EEgidDpN4txT6ZAnfb6b1cswzQMsAtBkAgOgnWCRyTP8ATaZkX8+aO6gUZIqGidI1jfaLJmUDfuJ04GCrgbPYPza/BK3AtDSwTDr3iRHA7tUd1D0sqGRzN77rTqkrtAMXNt0fWVaHZ7ees7kDZ7dxcOhR3oi7bKeowCNehFrqz7Nu/wB1QIdl/esAdE5S6wMdSE6rsxrtS5OobPDXNIc4FpBGmrSCPgn3ok9tnpPaHZ1NmV4BzOccxJJGgkgGzfBZHtRWDMO+LF0N8zf0BXdtDbVaqG5nNtJsyNfFUW06bqzQHusDMARJ5rmbTyavBrFSWOjM5YEWsI1HI6eKeWbun2BuC73bJbfvG/RSDZ4GhjmAJXT3omKxSK6wdx7xj1CVzLaLsGzwDMlSOwYvfdCO9EaxyorHu4KN48VZjZ7eJjglds5vE7uifegS8c2V9Bl/H4KV4tp/LOg3rrp4ENMzPgpBhBGp3/CNEd6BUccq3NTsjaGJOGomkzutaBeqwE5QacwaW8TYk2IXWdpV6dVjqpDS7uF7X0S4WJbTl1MAzcC4AnXRY6jgWgy4SOAgHSNYKazAt3ieRgRw3Jd2HuQsMvYuvxCoD2lKHkgWDHGmS0QJcCwmR3G6+Ep/YyoW12sO5p+E+SrsLSoMiaDXHm9w8gIXVQxJbWNVoDXG0Ad0CAIAPII70E07B4ZNM9F9qlWK/wBer/mH/iELf4rH8zH4aZwbkwoQvNPQFqaBRIQmIcmhCEDH0k1KhUwGFK7clQpAY9KzRCEDGf3T6eqEJjOqpomHRIhSCOV2qaEISBjUqEJiFRU0HihCBsaEMQhIETM0SoQkxhU1TqeqVCoQ9CEIIP/Z"
              alt=""
              className="col-span-1 rounded-full"
            />
            <p className="mt-4 text-2xl font-bold">Mestre</p>
            <p className="mt-4 text-xl font-bold">Vitórias: 312</p>
          </div>
          <div className="col-span-3 mt-4">
            <UserMatches />
            <UserChampionships />
          </div>
        </div>
      </div>
    </Guest>
  );
}
