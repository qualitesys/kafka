console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java 38 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#49"
 , "c1" : "OAuthBearerClientInitialResponse"
 , "c2" : "OAuthBearerClientInitialResponse(byte[])"
 , "c3" : "5"
 , "c4" : "18"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00089"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#89"
 , "c1" : "OAuthBearerClientInitialResponse"
 , "c2" : "OAuthBearerClientInitialResponse(String;SaslExtensions)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00107"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#107"
 , "c1" : "OAuthBearerClientInitialResponse"
 , "c2" : "OAuthBearerClientInitialResponse(String;String;SaslExtensions)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00119"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#119"
 , "c1" : "SaslExtensions"
 , "c2" : "extensions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00123"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#123"
 , "c1" : "byte[]"
 , "c2" : "toBytes()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00140"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#140"
 , "c1" : "String"
 , "c2" : "tokenValue()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00149"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#149"
 , "c1" : "String"
 , "c2" : "authorizationId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00166"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#166"
 , "c1" : "void"
 , "c2" : "validateExtensions(SaslExtensions)"
 , "c3" : "6"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00186"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#186"
 , "c1" : "String"
 , "c2" : "extensionsMessage()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "34"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.OAuthBearerClientInitialResponse@POLYN173682 the MagicNumber/String  'Invalid OAUTHBEARER client first message' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.OAuthBearerClientInitialResponse@POLYN173682 the MagicNumber/String  'authzid' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.OAuthBearerClientInitialResponse@POLYN173682 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.OAuthBearerClientInitialResponse@POLYN173682 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.OAuthBearerClientInitialResponse@POLYN173682 the MagicNumber/String  'kvpairs' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.OAuthBearerClientInitialResponse@POLYN173682 the MagicNumber/String  '=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.OAuthBearerClientInitialResponse@POLYN173682 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.OAuthBearerClientInitialResponse@POLYN173682 the MagicNumber/String  'Invalid OAUTHBEARER client first message: 'auth' not specified' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.OAuthBearerClientInitialResponse@POLYN173682 the MagicNumber/String  'Invalid OAUTHBEARER client first message: invalid 'auth' format' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.OAuthBearerClientInitialResponse@POLYN173682 the MagicNumber/String  'bearer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.OAuthBearerClientInitialResponse@POLYN173682 the MagicNumber/String  'scheme' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.OAuthBearerClientInitialResponse@POLYN173682 the MagicNumber/String  'Invalid scheme in OAUTHBEARER client first message: %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.OAuthBearerClientInitialResponse@POLYN173682 the MagicNumber/String  'scheme' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.OAuthBearerClientInitialResponse@POLYN173682 the MagicNumber/String  'token' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.OAuthBearerClientInitialResponse@POLYN176160 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.OAuthBearerClientInitialResponse@POLYN176617 the MagicNumber/String  'token value must not be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.OAuthBearerClientInitialResponse@POLYN176617 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.OAuthBearerClientInitialResponse@POLYN176617 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.OAuthBearerClientInitialResponse@POLYN176617 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.toBytes@POLYN177422 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.toBytes@POLYN177422 the MagicNumber/String  'a=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.toBytes@POLYN177422 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.toBytes@POLYN177422 the MagicNumber/String  'n,%s,%sauth=Bearer %s%s%s%s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#166"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00166] For method validateExtensions arguments SaslExtensions  extensions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00173] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00174] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.validateExtensions@POLYN178903 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.validateExtensions@POLYN178903 the MagicNumber/String  'Extension name ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.validateExtensions@POLYN178903 the MagicNumber/String  ' is invalid' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.validateExtensions@POLYN178903 the MagicNumber/String  'Extension name ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.validateExtensions@POLYN178903 the MagicNumber/String  ' is invalid' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.validateExtensions@POLYN178903 the MagicNumber/String  'Extension value (' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.validateExtensions@POLYN178903 the MagicNumber/String  ') for extension ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.validateExtensions@POLYN178903 the MagicNumber/String  ' is invalid' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.extensionsMessage@POLYN180140 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.extensionsMessage@POLYN180140 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerClientInitialResponse.extensionsMessage@POLYN180140 the MagicNumber/String  '=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.html#166"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00166] Public method validateExtensions is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerClientInitialResponse.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
