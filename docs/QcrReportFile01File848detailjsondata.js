console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java 88 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.security.ssl.SslPrincipalMapper"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.ssl.SslPrincipalMapper" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SslPrincipalMapper"
 , "c2" : "SslPrincipalMapper(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SslPrincipalMapper"
 , "c2" : "fromRules(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<String>"
 , "c2" : "splitRules(String)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "List<Rule>"
 , "c2" : "parseRules(List<String>)"
 , "c3" : "7"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "getName(String)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "19"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "50"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class SslPrincipalMapper contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method fromRules arguments String  sslPrincipalMappingRules"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method splitRules arguments String  sslPrincipalMappingRules"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.splitRules@POLYN185625 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.splitRules@POLYN185625 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method parseRules arguments List&lt;String &gt;  rules"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00046] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String  'Invalid rule: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String  'Invalid rule: `' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String  '`, unmatched substring: `' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String  '`' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String  'L' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String  6 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String  'U' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String  6 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method getName arguments String  distinguishedName"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00070] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.getName@POLYN188031 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.getName@POLYN188031 the MagicNumber/String  'No rules apply to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.getName@POLYN188031 the MagicNumber/String  ', rules ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.toString@POLYN188553 the MagicNumber/String  'SslPrincipalMapper(rules = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.toString@POLYN188553 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00089] The class Rule contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.Rule@POLYN189218 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.Rule@POLYN189218 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.Rule@POLYN189218 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.Rule@POLYN189218 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.Rule@POLYN189218 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.Rule@POLYN189531 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.Rule@POLYN189531 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.Rule@POLYN189531 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#114"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00114] For method apply arguments String  distinguishedName"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#114"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00114] The argument distinguishedName is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.apply@POLYN190093 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.apply@POLYN190093 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.apply@POLYN190093 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00139] For method escapeLiteralBackReferences arguments String  unescaped|int  numCapturingGroups"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00147] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00163] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN191117 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN191117 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN191117 the MagicNumber/String  '0' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN191117 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN191117 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN191117 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN191117 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN191117 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN191117 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN191117 the MagicNumber/String  '\\' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.escapeLiteralBackReferences@POLYN191117 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.toString@POLYN192839 the MagicNumber/String  'DEFAULT' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.toString@POLYN192839 the MagicNumber/String  'RULE:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.toString@POLYN192839 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.toString@POLYN192839 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.toString@POLYN192839 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.toString@POLYN192839 the MagicNumber/String  '/L' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.common.security.ssl.SslPrincipalMapper.Rule.toString@POLYN192839 the MagicNumber/String  '/U' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#25"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00025] Public method fromRules is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.ssl.SslPrincipalMapper.SslPrincipalMapper@POLYN185251"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.ssl.SslPrincipalMapper.fromRules@POLYN185453"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.ssl.SslPrincipalMapper.getName@POLYN188031"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.ssl.SslPrincipalMapper.splitRules@POLYN185625"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#71"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00071] In the recursive method org.apache.kafka.common.security.ssl.SslPrincipalMapper.getName@POLYN188031 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#75"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00075] In the recursive method org.apache.kafka.common.security.ssl.SslPrincipalMapper.getName@POLYN188031 the MagicNumber/String ', rules ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#75"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00075] In the recursive method org.apache.kafka.common.security.ssl.SslPrincipalMapper.getName@POLYN188031 the MagicNumber/String 'No rules apply to ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#48"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00048] In the recursive method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String 'Invalid rule: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00051] In the recursive method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String 'Invalid rule: `' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00051] In the recursive method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String '`' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00051] In the recursive method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String '`, unmatched substring: `' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00055] In the recursive method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00055] In the recursive method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00057] In the recursive method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00057] In the recursive method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#58"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00058] In the recursive method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00059] In the recursive method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String 4 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00060] In the recursive method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String 'L' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00060] In the recursive method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String 6 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00061] In the recursive method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String 'U' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00061] In the recursive method org.apache.kafka.common.security.ssl.SslPrincipalMapper.parseRules@POLYN186292 the MagicNumber/String 6 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#30"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00030] In the recursive method org.apache.kafka.common.security.ssl.SslPrincipalMapper.splitRules@POLYN185625 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/ssl/SslPrincipalMapper.java.html#37"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00037] In the recursive method org.apache.kafka.common.security.ssl.SslPrincipalMapper.splitRules@POLYN185625 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
