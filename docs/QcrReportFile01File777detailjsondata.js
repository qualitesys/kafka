console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java 53 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "49"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00028] The class OAuthBearerLoginModule contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method initialize arguments Subject  subject|CallbackHandler  callbackHandler|Map&lt;String ,? &gt;  sharedState|Map&lt;String ,? &gt;  options"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#55"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00055] The argument callbackHandler is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.initialize@POLYN248773 the MagicNumber/String  'Callback handler must be castable to %s: %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.login@POLYN249527 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.login@POLYN249527 the MagicNumber/String  'Already have an uncommitted token with private credential token count=%d' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.login@POLYN249527 the MagicNumber/String  'Already logged in without a token' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.login@POLYN249527 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.login@POLYN249527 the MagicNumber/String  'Already have a committed token with private credential token count=%d; must login on another login context or logout here first before reusing the same login context' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.login@POLYN249527 the MagicNumber/String  'Login has already been committed without a token' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.login@POLYN249527 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.login@POLYN249527 the MagicNumber/String  'Logged in without a token, this login cannot be used to establish client connections' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.login@POLYN249527 the MagicNumber/String  'Login succeeded; invoke commit() to commit it; current committed token count={}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.login@POLYN249527 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.identifyToken@POLYN250728 the MagicNumber/String  'An internal error occurred while retrieving token from callback handler' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.identifyToken@POLYN250728 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.identifyToken@POLYN250728 the MagicNumber/String  'Login failed: {} : {} (URI={})' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.identifyExtensions@POLYN251738 the MagicNumber/String  'An internal error occurred while retrieving SASL extensions from callback handler' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.identifyExtensions@POLYN251738 the MagicNumber/String  'CallbackHandler {} does not support SASL extensions. No extensions will be added' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.identifyExtensions@POLYN251738 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.identifyExtensions@POLYN251738 the MagicNumber/String  'SASL Extensions cannot be null. Check whether your callback handler is explicitly setting them as null.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.identifyExtensions@POLYN251738 the MagicNumber/String  'Extensions cannot be null.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00142] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.logout@POLYN252788 the MagicNumber/String  'Cannot call logout() immediately after login(); need to first invoke commit() or abort()' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.logout@POLYN252788 the MagicNumber/String  'Nothing here to log out' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.logout@POLYN252788 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.logout@POLYN252788 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.logout@POLYN252788 the MagicNumber/String  'Logging out my token; current committed token count = {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.logout@POLYN252788 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.logout@POLYN252788 the MagicNumber/String  'Done logging out my token; committed token count is now {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.logout@POLYN252788 the MagicNumber/String  'No tokens to logout for this login' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.logout@POLYN252788 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.logout@POLYN252788 the MagicNumber/String  'Logging out my extensions' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.logout@POLYN252788 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.logout@POLYN252788 the MagicNumber/String  'Done logging out my extensions' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.logout@POLYN252788 the MagicNumber/String  'No extensions to logout for this login' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.logout@POLYN252788 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.commit@POLYN254588 the MagicNumber/String  'Nothing here to commit' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.commit@POLYN254588 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.commit@POLYN254588 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.commit@POLYN254588 the MagicNumber/String  'Committing my token; current committed token count = {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.commit@POLYN254588 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.commit@POLYN254588 the MagicNumber/String  'Done committing my token; committed token count is now {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.commit@POLYN254588 the MagicNumber/String  'No tokens to commit, this login cannot be used to establish client connections' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.commit@POLYN254588 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.commit@POLYN254588 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.commit@POLYN254588 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.abort@POLYN255784 the MagicNumber/String  'Login aborted' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.abort@POLYN255784 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.abort@POLYN255784 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.abort@POLYN255784 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.abort@POLYN255784 the MagicNumber/String  'Nothing here to abort' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/OAuthBearerLoginModule.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule.abort@POLYN255784 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
