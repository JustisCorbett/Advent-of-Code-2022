const input = "htsslsmstsrrhlrrllqppfnpnzzqtqtjqttslttmvmsmbbnpbbznzjjmrmsrrnjjzczcfcqchcnnhrnrzrnrzzddtrrpjrprbpbwbswsqswqswsqsqffgngtgwtwbtbbhhslsrsmrmffgcgtcgcppnbpnpbnpptcptpltthjhwwlttrrlldzldzzzlssccrfrqfrfdfldfldfdzfdzzcnznwznzqqzpqzqdzzbbslbljlqjjvzjzgzqgqqqvsvffzjfzfmzzrjrhjhrhcrhhtgtmggchggcsggvtttwmmsspmpffzpfpjjnwwnpwwdttcfcmmlblwlvvqrqddcdwcwnnfqnqdnnncggflfdftddtftqthqhrrmsrmsrsffbccjnnjjgddppjmmldllhttqvqzvzrvrsslnlplrprtprtttnvnsvsvzzdndrnnnlznzcnnzwwzjjsnjnwjwqqczqcqwqppqnqqllgblbhhbbzbjzzwjzzrqzqggdppgcgwcclglhhwwgcccgcvvpbbrzzwszsqqjqrrczzvmvpprllsgstsnnnrvvsszgzddzttbccmjccwtccrbccnssdqsdsqqfgqfqbfqfjqqzqqmhmwhwffsjjcjffqmmwjwhjjqttpvvgddzjdddwndwdjdldgdsdmdzmdzmzqqszzcwwwjbbvvlplnpndnddjcjcttrgrggjvjsjvjssnsmshmhrmhhfvvdqqppmbbjnbnzzzwlzzfmmlttvptvpphlhwhzzwffcsfsppdssvsvgsgcscmmdwwpggtcgttmlmglgmmcsccmmgffnvvvvsscstctptzzcmcsclcffnwwndnwddmgmfmvffntfnndgdrrbmrrvprrjnjcnjjsgjgmmjjjqwqhhlfljfljlclttrgttmdmhhcncwncnmccnmnqqmhmwmdwdmdfdttnggcscfsftttcjchhqghhtdthtwtgwgttlffphfhtftpfttlgtltblljmljjsmsszgsghhnnmvnmnvmvmhvvtmmdqdppclplqljllzppwgpgvpvjpvvlwldlcdcmvfrbcqfdrgqjdmpvczgmtrbhtfgbctjghwfmpqtprlnvzvbmhnmgsnbcqpdqhtstncmtrvwmjzzmsbprfvmszgvdwjwchzcvmzncfblffwvwwrdqpfnvrtlftnvhcqpwfgzdnmpqthblmqzhbdbdhmqvscfrpbjbgjgdndhlnnpcrrmrlghcwvmmmhbvdsrztbpdvhwhsphmgblzfpflhnbrvjsgsbvgcfwdlbmbsmbqfwczhhbbwntsczhljgvdwpsfmjppmdwcfchhvtrwlfgqrzbtzndqwbwqflpthhgtzrfmspfnlrrvrjttwnzzfsbzlvfwlntvcqhfntllsrdgqjdbrbvnmjgfsqshmcgtsmlrzjmmqbpfdfhlghqjnjrcnzvvmbwhwfwpbbsmpdmvvznstqpjwmthncjsvfmbhwtbfqgfmvhhwrwzrzccbmmrngfbcqgsdjlfwrlzqwrbhvhmjzqqtgqvjwgllhhgphjthwnscndjfhrdzjctthwfszztvtzcnvsnfdwnvrrbjzplgnghfsvnflhctjntrpzfgjnfzlmwzrvqcfdqqscrffjshhgmvlgdtqpbllfdspdhcccqbmpqcgctljwzdszbfzsltfmdrcvmjqmpvzzhnczlfdbrmsvfffmfzjvnthghqgtnvjtflzrrnrhqshtzslbmbghvtqcmbdgzcmmrpbtqlzbzjhhgfcbrbcztlhdcfqccqsgdqdfrvlsprbhwhtmjfbzlzfpcslcddzdhbhstvqjgdfwdwzfhrzpthnzgmzrrbrszvcwhbdczzcnqsqrwdpmgdmcdmccmfdwdfmzpbbsdtjlmlvcnvhhgcltwmpzqmjlpbsbfrrntrbmrrmgqrdsbfcgnqvnmwwgnmvvpjzpwbvwfzzfcfrbgdshrvbpdlbpzdsvjnrsmfttqgbngjbqcnhhhmrnlgwjnlfcsdwccqqlzcdrcqnjlmsfqldgdmwlctstcvqbvvwvhvrnhvtgpcnsstnhvlttdnstlndnpdglqlbgggqlwqpfztgzvhqqwbctvgtrmrbpmvwlztsfbrmhhpfdtnsjcjmngsqtzvhqjnwmgcrjbhvghpnrjlrhjfrfrmbzvprpzlcshbqtlnlmqmfhsmbznjmpzwljccngbsvqqmghqsqwwmtqhgddnpcmmlfvmplgptzmfsmpntprnwlpjmsdsntpmpnhwlqgfwslrnjlmvhvqsnlcssvrqvtvfhhghbhnvmpngtdmrcmftjmwgnptbmjcwvrqqbczmtdprlltcjcggvffvjwdthbhvjvhbsmfnstqvczmvsgsqfjmddszzrwnbrbvlhgltjddczwpzpsgfgbtmgmssbszhjfbprpbgsqpvgwfnmpcdwfzwbfbtfwhjbjgrctcwqgfhpvjpjssmcpppwpbnlfsrmbzqdpmpmqjtzqmqswpfhfvfltwnfbltvdmfgmpbhzzdrbtnmmjfqgtrgmrbsgplfrmlnjrggtslngnphcvcwvqsdftlhddhpsdwlhzcrfwgwbndplwjmtrltmswwdqjpgmmcdchllzdgpfpfrvqrmvppvzcrvbswzdclnqnqvmfvjtpzpvzlmbngtrrjwpgqjgrrqbqwcvjlgqzddtcfmmrqtnjppqvztfpdrdmjpsqqvzrhwjgvdwwdtmrzrvhwgsqvjjrtsdtwfwhrbcsqdblhgwzghrqrqtfbzszrmjqbhrtsrcfjlzbcjmdnpthrtbhtzmhgpfcqndwpmtlvzschzzcqdnzdrfhczsrscvttlpslrzgvwprwppmpfjqwhtnhzcdjjwmsnvqzmtlzsdpbdtdtsmbmjszsglrldcsgtnmbgsjfmnrftnmvnjtswrmdthvstmdlsnsmrbqhdlpnmnhjhcccgnzrrsljvwswmhjqrrfbwwhgrcttsdcjsdtlgmgblfnvwmgztbbzlbrdnspfnvwvhzlztdhlzhwwppgwwvrhfbjvrmjpjflqzbdnlvptmrsggqmzgmzlsdzbfqnqzzdnzfgmhncvwmgrcfrmlnwzcwdsvtwbvcqpmgcczbnnfdrlsgnfgnpbdstdmwhlprnzvhjpznsgwhfhzfwmjsvcbwccpsnfgbzrltcbwczcmzwljcswgwjnhwtjrjvgrggsrqszscrjcghnwdzpzhttrjcgwvmtcwmrhvwptlgfjpdjpnhphmzdgfdvsncswbdvjdtsgdtlsgjljlczgrwbswtbwrcfpmhgfjfnhpsmfrrtcjmpvvscmgftpprdmbjwcvhzbrmpbvhgzwftwtvvhrjmljgjhbpnbnfntmjhvjrzwlqbtqlrfbblgmfsbgzhhscgwgzrwvflnfctngtwbvdbbgspntclnbwgpppjgbrlqvtfznpdttrsplvjfsgbjwjprbvdfvjtffbhsjwgbsfschfnmlqdfzmdwzvfctjjvzncdvrdttlpvpgvsssflpfnrzgfznzlldrbgnnztngtlbbrmrmlfnnspsvvsfzfbmsblmzdwqcrftvnbvdlhgdqjtglclpzrchtlffrfwslqjvbfpvnhmdgqrcjtbhmjqwqzpfndqbwldbzmwqsptdccczmhwmdqqzcqvmbbnmqndtspmbtggcghdhsfgrjgvwjdbwmltbhdvdtgqnpqhwmhzpzbqjtnlftqrjbsvtwtgpmvpnfwdtsjgdtfnlntpgrmwphphrrzhbdrbzhtqddwvptdllntjzldzrndhfjwdfnmtjmjtfmndbvlwgmlcmwwlpfdjwbfznbllbmqrlmvljngvpmdlqmvdvwvpqwlbqssqcbnrmhdvrzwljstghmhntwsbqmnlpgthbwmrznbbggthtjhnndnqbzmcrtftcbnpctqjzghdfcvmmvpqwtnntstlspfsgwfdbrlsbwgbhhbfcvwrjclsgmmbqmmjwtdjqppjvcbnbvfwczlqzbtnlhzhssglgnlm"

const decode = (data) => {
	console.log("start");
	const dataArr = data.split("");
    for (i = 0; i < dataArr.length + 1; i++) {
    	let currMap = {};
    	for (j = i; j < (i + 4); j++) {
        	currMap[dataArr[j]] = j;
        }
        if (Object.keys(currMap).length == 4) {
        	console.log(currMap);
        	return Object.values(currMap)[3] + 1;
        }
    }
    return null;
}

console.log(decode(input));