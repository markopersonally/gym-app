import {
  H2,
  Table,
  THead,
  THeadTr,
  THeadTh,
  TBody,
  TBodyTr,
  TBodyTd,
} from "./SectionMembershipStyled.jsx";

export default function SectionMembership() {
  return (
    <section>
      <H2>Membership</H2>
      <Table>
        <THead>
          <THeadTr>
            <THeadTh colSpan="3">Gym Services:</THeadTh>
          </THeadTr>
          <THeadTr>
            <THeadTh>Service:</THeadTh>
            <THeadTh>Description:</THeadTh>
            <THeadTh>Price:</THeadTh>
          </THeadTr>
        </THead>
        <TBody>
          <tr>
            <TBodyTd>One day</TBodyTd>
            <TBodyTd>Try and see!</TBodyTd>
            <TBodyTd>$10</TBodyTd>
          </tr>
          <tr>
            <TBodyTd className="bgc">One week</TBodyTd>
            <TBodyTd className="bgc">
              See all sports activities for a week!
            </TBodyTd>
            <TBodyTd className="bgc">$70</TBodyTd>
          </tr>
          <tr>
            <TBodyTd>Month</TBodyTd>
            <TBodyTd>Monthly pass for all activities</TBodyTd>
            <TBodyTd>$270</TBodyTd>
          </tr>
          <tr>
            <TBodyTd className="bgc">3-months</TBodyTd>
            <TBodyTd className="bgc">
              Three-month pass for all activities
            </TBodyTd>
            <TBodyTd className="bgc">$770</TBodyTd>
          </tr>
          <tr>
            <TBodyTd>Year</TBodyTd>
            <TBodyTd>One year pass for all activities</TBodyTd>
            <TBodyTd>$1770</TBodyTd>
          </tr>
          <tr>
            <TBodyTd className="bgc">Personal</TBodyTd>
            <TBodyTd className="bgc">
              Individual training with a trainer
            </TBodyTd>
            <TBodyTd className="bgc">$170</TBodyTd>
          </tr>
        </TBody>
      </Table>
    </section>
  );
}
