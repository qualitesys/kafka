console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java 26 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.xml" 
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
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
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "11"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00017] The class DelegationTokenCache contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method credential arguments String  mechanism|String  tokenId"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.common.security.token.delegation.internals.DelegationTokenCache.credential@POLYN169951 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.common.security.token.delegation.internals.DelegationTokenCache.credential@POLYN169951 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method owner arguments String  tokenId"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.common.security.token.delegation.internals.DelegationTokenCache.owner@POLYN170348 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.common.security.token.delegation.internals.DelegationTokenCache.owner@POLYN170348 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method updateCache arguments DelegationToken  token|Map&lt;String ,ScramCredential &gt;  scramCredentialMap"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#45"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00045] The argument token is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method removeCache arguments String  tokenId"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method tokenIdForHmac arguments String  base64hmac"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method tokenForHmac arguments String  base64hmac"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.common.security.token.delegation.internals.DelegationTokenCache.tokenForHmac@POLYN171718 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.common.security.token.delegation.internals.DelegationTokenCache.tokenForHmac@POLYN171718 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method addToken arguments String  tokenId|TokenInformation  tokenInfo"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method removeToken arguments String  tokenId"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.common.security.token.delegation.internals.DelegationTokenCache.removeToken@POLYN172215 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.common.security.token.delegation.internals.DelegationTokenCache.removeToken@POLYN172215 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method token arguments String  tokenId"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method credentialCache arguments String  mechanism"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method updateCredentials arguments String  tokenId|Map&lt;String ,ScramCredential &gt;  scramCredentialMap"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#97"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00097] The argument scramCredentialMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00099] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00101] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.common.security.token.delegation.internals.DelegationTokenCache.updateCredentials@POLYN173191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/internals/DelegationTokenCache.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.common.security.token.delegation.internals.DelegationTokenCache.updateCredentials@POLYN173191 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
