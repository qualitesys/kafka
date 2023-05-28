console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java 65 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.security.ssl.SslPrincipalMapper"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.ssl.SslPrincipalMapper" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#36"
 , "c1" : "SslPrincipalMapper"
 , "c2" : "SslPrincipalMapper(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#40"
 , "c1" : "SslPrincipalMapper"
 , "c2" : "fromRules(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#44"
 , "c1" : "List&lt;String&gt;"
 , "c2" : "splitRules(String)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#58"
 , "c1" : "List&lt;Rule&gt;"
 , "c2" : "parseRules(List&lt;String&gt;)"
 , "c3" : "7"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#83"
 , "c1" : "String"
 , "c2" : "getName(String)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00094"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#94"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "50"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method fromRules arguments String  sslPrincipalMappingRules"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method splitRules arguments String  sslPrincipalMappingRules"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.splitRules@POLYN176787 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.splitRules@POLYN176787 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method parseRules arguments List&lt;String &gt;  rules"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00061] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN177458 the MagicNumber/String  'Invalid rule: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN177458 the MagicNumber/String  'Invalid rule:  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN177458 the MagicNumber/String  ' , unmatched substring:  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN177458 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN177458 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN177458 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN177458 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN177458 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN177458 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN177458 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN177458 the MagicNumber/String  'L' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN177458 the MagicNumber/String  6 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN177458 the MagicNumber/String  'U' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN177458 the MagicNumber/String  6 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method getName arguments String  distinguishedName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00083] For method getName list of called methods Object monObjet|java.lang.String r_applyN179386"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00085] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.getName@POLYN179201 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.getName@POLYN179201 the MagicNumber/String  'No rules apply to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.getName@POLYN179201 the MagicNumber/String  ', rules ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.toString@POLYN179725 the MagicNumber/String  'SslPrincipalMapper(rules = ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.toString@POLYN179725 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.Rule@POLYN180392 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.Rule@POLYN180392 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.Rule@POLYN180392 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.Rule@POLYN180392 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.Rule@POLYN180392 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.Rule@POLYN180705 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.Rule@POLYN180705 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.Rule@POLYN180705 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#129"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00129] For method apply arguments String  distinguishedName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#129"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00129] For method apply list of called methods Object monObjet|java.lang.String distinguishedName_replaceAllN181677|java.lang.String result_toLowerCaseN181983|java.lang.String result_toUpperCaseN182179"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#129"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00129] The argument distinguishedName is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.apply@POLYN181267 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.apply@POLYN181267 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.apply@POLYN181267 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#154"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00154] For method escapeLiteralBackReferences arguments String  unescaped|int  numCapturingGroups"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#154"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00154] For method escapeLiteralBackReferences list of called methods Object monObjet|int Integer_parseIntN182971|java.lang.String sb_toStringN183923"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00162] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00178] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN182295 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN182295 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN182295 the MagicNumber/String  '0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN182295 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN182295 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN182295 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN182295 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN182295 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN182295 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN182295 the MagicNumber/String  '\\' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN182295 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.toString@POLYN184029 the MagicNumber/String  'DEFAULT' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.toString@POLYN184029 the MagicNumber/String  'RULE:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.toString@POLYN184029 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.toString@POLYN184029 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.toString@POLYN184029 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.toString@POLYN184029 the MagicNumber/String  '/L' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.toString@POLYN184029 the MagicNumber/String  '/U' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00040] Public method fromRules is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
